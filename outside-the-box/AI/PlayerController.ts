import AI from "../../Wolfie2D/DataTypes/Interfaces/AI";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Emitter from "../../Wolfie2D/Events/Emitter";
import GameEvent from "../../Wolfie2D/Events/GameEvent";
import Receiver from "../../Wolfie2D/Events/Receiver";
import Input from "../../Wolfie2D/Input/Input";
import AnimatedSprite from "../../Wolfie2D/Nodes/Sprites/AnimatedSprite";
import Timer from "../../Wolfie2D/Timing/Timer";
import Viewport from "../../Wolfie2D/SceneGraph/Viewport";
import MathUtils from "../../Wolfie2D/Utils/MathUtils";

import { TYSEvents } from "../TYSEvents";
import { TYSControls } from "../TYSControls";

import CanvasNode from "../../Wolfie2D/Nodes/CanvasNode";

export const PlayerAnimations = {
    IDLE: "IDLE",
    DEATH: "DEATH"
} as const;


/**
 * A class for controlling the player in the TYSScene.
 */
export default class PlayerController implements AI {
	/** The GameNode that owns this PlayerController AI */
	private owner!: AnimatedSprite;

    private currentHealth!: number;
    private maxHealth!: number;
    private minHealth!: number;

    private currentSpeed!: number;

	// A receiver and emitter to hook into the event queue
	private receiver!: Receiver;
	private emitter!: Emitter;

	/**
	 * This method initializes all variables inside of this AI class.
     * 
	 * @param owner The owner of this AI - i.e. the player
	 * @param options The list of options for ai initialization
	 */
	public initializeAI(owner: AnimatedSprite, options: Record<string,any>): void {
		this.owner = owner;

		this.receiver = new Receiver();
		this.emitter = new Emitter();
		
		this.activate(options);
	}
	public activate(options: Record<string,any>): void {
		// Set the player's current health
        this.currentHealth = 3;

        // Set upper and lower bounds on the player's health
        this.minHealth = 0;
        this.maxHealth = 10;

        // Set the player's movement speed
        this.currentSpeed = 300

        // Play the idle animation by default
		this.owner.animation.play(PlayerAnimations.IDLE);
	};
	/**
	 * Handles updates to the player 
	 * 
	 * @remarks
	 * 
	 * The PlayerController updates the player at every frame (each time the main
	 * GameLoop iterates). 
	 * 
	 * This method should handle all incoming user input events. Things like key-presses, 
	 * mouse-clicks, mouse-downs etc. In addition, this method should handle all events
	 * that the PlayerController's receiver is subscribed to.
	 * 
	 * This method is also responsible for updating the state of the player, and altering
	 * the rest of the game to changes in the state of the player. If the player's stats
	 * change, the UI needs to be notified so that it can reflect those changes. If the 
	 * player is dead, the scene needs to be notified so that it can change to GameOver scene.
	 * 
	 * @param deltaT - the amount of time that has passed since the last update
	 */
	public update(deltaT: number): void {
        // First, handle all events 
		while(this.receiver.hasNextEvent()){
			this.handleEvent(this.receiver.getNextEvent());
		}

        // If the player is out of hp - play the death animation
		if (this.currentHealth <= this.minHealth) { 
            this.owner.animation.playIfNotAlready(PlayerAnimations.DEATH, false, TYSEvents.DEAD);
            return;
        }

		// Get the player's input direction 
		let forwardAxis = (Input.isPressed(TYSControls.MOVE_UP) ? 1 : 0) + (Input.isPressed(TYSControls.MOVE_DOWN) ? -1 : 0);
		let horizontalAxis = (Input.isPressed(TYSControls.MOVE_LEFT) ? -1 : 0) + (Input.isPressed(TYSControls.MOVE_RIGHT) ? 1 : 0);

		// Move the player
		let movement = Vec2.UP.scaled(forwardAxis * this.currentSpeed).add(new Vec2(horizontalAxis * this.currentSpeed, 0));
		this.owner.position.add(movement.scaled(deltaT));

		let vp = this.owner.getScene().getViewport();

		// Lock the players position 
		this.lockPlayer(this.owner, vp.getCenter(), vp.getHalfSize());
		// Wrap the players position
		this.wrapPlayer(this.owner, vp.getCenter(), vp.getHalfSize());
	}
	/**
	 * This method handles all events that the reciever for the PlayerController is
	 * subscribed to.
	 * 
	 * @see {AI.handleEvent}
	 * 
	 * @param event a GameEvent that the PlayerController is subscribed to
	 */
	public handleEvent(event: GameEvent): void {
		switch(event.type) {
			default: {
				throw new Error(`Unhandled event of type: ${event.type} caught in PlayerController`);
			}
		}
	}
	/**
	 * @see {AI.destroy}
	 */
	public destroy(): void {
		this.receiver.destroy()
	}

    
    protected handlePlayerHitEvent(event: GameEvent): void {
        this.owner.animation.play(PlayerAnimations.IDLE, true);
    }

	/**
	 * Function for locking the player's coordinates. Player should not be able to move off the 
	 * left or right side of the screen.
	 * 
	 * @see {Viewport} for more information about the viewport
	 * 
	 * @param player - the CanvasNode associated with the player
	 * @param vpc - the coordinates of the center of the viewport
	 * @param vphs - the halfsize of the viewport 
	 */
	protected lockPlayer(player: CanvasNode, vpc: Vec2, vphs: Vec2): void {
		if (player.position.x - player.sizeWithZoom.x <= vpc.x - vphs.x) {
			player.position.x = vpc.x - vphs.x + player.sizeWithZoom.x;
		}	
		if (player.position.x + player.sizeWithZoom.x >= vpc.x + vphs.x) {
			player.position.x = vpc.x + vphs.x - player.sizeWithZoom.x;
		}
	}
	/**
	 * Function that wraps the player's y-coordinates, if they have moved halfway into the padded
	 * region of one side of the viewport.
	 * 
	 * @param player - the GameNode associated with the player
	 * @param vpc - the coordinates of the center of the viewport
	 * @param vphs - the halfsize of the viewport
	 * 
	 * @remarks
	 * 
	 * Wrapping the player around the screen involves moving the player over from one side of the screen 
	 * to the other side of the screen once the player has ventured too far into the padded region. To do
	 * this, you will have to:
	 * 
	 * 1.) Check if the player has moved halfway out of the visible region in the y-direction
	 * 2.) Update the player's position to the opposite side of the visible region
	 * 
	 * @see {Viewport} for more information about the viewport
	 * 
	 * For reference, a visualization of the padded viewport is shown below. The o's represent locations 
	 * where the player should be wrapped. The O's represent locations where the player should be wrapped to. 
	 * The X's represent locations where the player shouldn't be wrapped
	 * 
	 * Ex. the player should be wrapped from o1 -> O1, from o2 -> O2, etc. 
	 * 
	 * 
	 * 					 X	 THIS IS OUT OF BOUNDS
	 * 			 _______________________________________________
	 * 			|	 THIS IS THE PADDED REGION (OFF SCREEN)		|
	 * 			|												|
	 * 			|											    |
	 * 			|		 ___o1_______________O2_________		|
	 * 			|		|								|		|
	 * 			|		|								|		|
	 *	 		|		|	  THIS IS THE VISIBLE		|		|
	 * 		X	|	X	|			 REGION				|	X	|   X 
	 * 			|		|								|		|
	 * 			|		|		X						|		|
	 * 			|		|___O1_______________o2_________|		|
	 * 			|		   										|
	 * 			|		   						   				|
	 * 			|_______________________________________________|
	 *
	 * 							X THIS IS OUT OF BOUNDS													
	 */
	protected wrapPlayer(player: CanvasNode, vpc: Vec2, vphs: Vec2): void {
		if (player.position.y < vpc.y - vphs.y) {
			player.position.y = vpc.y + vphs.y;
		} 
		if (player.position.y > vpc.y + vphs.y) {
			player.position.y = vpc.y - vphs.y;
		}
	}

} 