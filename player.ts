namespace RedLine {
    let playerSprite: Sprite = null
    let canDash = true
    let health = 100
    let swordCooldown = 0

    /**
     * Initialize Red Line style player (red sprite, platformer physics)
     */
    export function initPlayer() {
        playerSprite = sprites.create(img`
            . . . . . . . . 
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            . 2 2 4 4 2 2 . 
            . 2 2 4 4 2 2 . 
            . 2 2 2 2 2 2 . 
            . . 2 2 2 2 . . 
            . . . . . . . . 
        `, SpriteKind.Player)  // Red theme (use color 2 for red)
        
        playerSprite.setPosition(20, 80)
        controller.moveSprite(playerSprite, 100, 0)  // Horizontal speed
        
        // Gravity & jumping
        playerSprite.ay = 300
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (playerSprite.vy >= 0) playerSprite.vy = -150  // Jump
        })
        
        game.onUpdate(() => {
            // Dash cooldown
            if (controller.B.isPressed() && canDash) {
                canDash = false
                playerSprite.vx = playerSprite.vx > 0 ? 250 : -250
                pause(300)
                canDash = true
            }
            
            // Sword attack (simple)
            if (controller.left.isPressed() || controller.right.isPressed()) {  // Or map to another button
                if (swordCooldown <= 0) {
                    swordCooldown = 500
                    // Spawn sword projectile or hitbox here
                    let slash = sprites.createProjectileFromSprite(img`...`, playerSprite, playerSprite.vx * 1.5, 0)
                }
            }
            if (swordCooldown > 0) swordCooldown -= game.currentScene().eventContext.deltaTimeMillis
        })
    }

    export function getPlayer(): Sprite { return playerSprite }
    export function getHealth(): number { return health }
    export function damage(amount: number) { health -= amount; /* add screen shake, red flash */ }
}
