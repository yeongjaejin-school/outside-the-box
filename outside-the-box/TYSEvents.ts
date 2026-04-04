/**
 * Events that get emitted in The Yellow Submarine.
 */
export const TYSEvents = {

    /**
     * The event that gets emitted when the player's health changes
     * 
     * Has data: { curhp: number, maxhp: number }
     */
    HEALTH_CHANGE: "HEALTH_CHANGE",


    /**
     * The event that gets emitted when the player's health hits 0 (or minhealth)
     * 
     * Has data: {}
     */
	DEAD: "DEAD",
    
} as const;