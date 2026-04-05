import AABB from "../../Wolfie2D/DataTypes/Shapes/AABB";
import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Graphic from "../../Wolfie2D/Nodes/Graphic";
import { GraphicType } from "../../Wolfie2D/Nodes/Graphics/GraphicTypes";
import AnimatedSprite from "../../Wolfie2D/Nodes/Sprites/AnimatedSprite";
import Label from "../../Wolfie2D/Nodes/UIElements/Label";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Scene from "../../Wolfie2D/Scene/Scene";
import Color from "../../Wolfie2D/Utils/Color";
import RandUtils from "../../Wolfie2D/Utils/RandUtils";
import Sprite from "../../Wolfie2D/Nodes/Sprites/Sprite";
import CanvasNode from "../../Wolfie2D/Nodes/CanvasNode";
import GameEvent from "../../Wolfie2D/Events/GameEvent";
import Timer from "../../Wolfie2D/Timing/Timer";
import Circle from "../../Wolfie2D/DataTypes/Shapes/Circle";
import MathUtils from "../../Wolfie2D/Utils/MathUtils";

import PlayerController from "../AI/PlayerController";

import { GameEventType } from "../../Wolfie2D/Events/GameEventType";

import { TYSEvents } from "../TYSEvents";
import Layer from "../../Wolfie2D/Scene/Layer";


export const TYSLayers = {
	PRIMARY: "PRIMARY",
	BACKGROUND: "BACKGROUND", 
	UI: "UI"
} as const;

/**
 * This is the main scene for our game. 
 * @see Scene for more information about the Scene class and Scenes in Wolfie2D
 */
export default class TYSScene extends Scene {
    // The key and path to the player's spritesheet json data
    public static PLAYER_KEY: string = "PLAYER";
    public static PLAYER_PATH = "game_assets/spritesheets/AYellowBarrelWithWindows.json"

    // The key and path to the background sprite
	public static BACKGROUND_KEY = "BACKGROUND"
    public static BACKGROUND_PATH = "game_assets/sprites/WavyBlueLines.png"

	// Sprites for the background images
	private bg1!: Sprite;
	private bg2!: Sprite;

	// Here we define member variables of our game, and object pools for adding in game objects
	private player!: AnimatedSprite;

	// The padding of the world
	private worldPadding: Vec2 = Vec2.ZERO;

	// Time passed since the start of the scene, used for background movement
	private timePassed: number = 0;


	/** Scene lifecycle methods */
	/**
	 * @see Scene.initScene
	 */
	public override initScene(options: Record<string, any>): void {}
	/**
	 * @see Scene.loadScene
	 */
	public override loadScene(){
		// Load in the player spritesheet
		this.load.spritesheet(TYSScene.PLAYER_KEY, TYSScene.PLAYER_PATH);
		// Load in the background image
		this.load.image(TYSScene.BACKGROUND_KEY, TYSScene.BACKGROUND_PATH);
	}
	/**
	 * @see Scene.startScene
	 */
	public override startScene(){
		this.worldPadding = new Vec2(64, 64);

		// Create a background layer
		this.addLayer(TYSLayers.BACKGROUND, 0);
		this.initBackground();

		// Create a layer to serve as our main game - Feel free to use this for your own assets
		// It is given a depth of 5 to be above our background
		this.addLayer(TYSLayers.PRIMARY, 5);
		// Initialize the player
		this.initPlayer();
		// Initialize the Timers

		// Subscribe to player events
		this.receiver.subscribe(TYSEvents.HEALTH_CHANGE);
		this.receiver.subscribe(TYSEvents.DEAD);

		
	}
	/**
	 * @see Scene.updateScene 
	 */
	public override updateScene(deltaT: number){
		this.timePassed += deltaT;
		// Handle events
		while (this.receiver.hasNextEvent()) {
			this.handleEvent(this.receiver.getNextEvent());
		}
	}
    /**
     * Unload or keep assets from the scene
     */
    public override unloadScene(): void {
		// keep all resources.
		// this.load.keepSpritesheet(TYSScene.PLAYER_KEY);
        // this.load.keepImage(TYSScene.BACKGROUND_KEY);
        // this.load.keepSpritesheet(TYSScene.MINE_KEY);
		// this.load.keepShader(BubbleShaderType.KEY);
		// this.load.keepShader(LaserShaderType.KEY);
	}



	/**
	 * This method helps with handling events. 
	 * 
	 * @param event the event to be handled
	 * @see GameEvent
	 */
	protected handleEvent(event: GameEvent){
		switch(event.type) {
			case TYSEvents.DEAD: {
				
				break;
			}
			default: {
				throw new Error(`Unhandled event with type ${event.type} caught in ${this.constructor.name}`);
			}
		}
	}


	// Initailization methods
	// Initialize Player
	private initPlayer(): void {}
	// Initialize Background
	private initBackground(): void {}
}