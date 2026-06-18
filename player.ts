namespace RedLine {
    let player: Sprite = null
    let canDash = true
    let health = 3

    /**
     * Initialize the Red Line player
     */
    export function initPlayer() {
        player = sprites.create(img`
            . . . . . . . . 
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            . 2 2 4 4 2 2 . 
            . 2 2 4 4 2 2 . 
            . 2 2 2 2 2 2 . 
            . . 2 2 2 2 . . 
            . . . . . . . . 
        `, SpriteKind.Player)
        
        player.setPosition(30, 80)
        controller.moveSprite(player, 100, 0)
        player.ay = 400

        // Jump
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (player.vy >= 0) player.vy = -180
        })

        game.onUpdate(() => {
            // Dash with B
            if (controller.B.isPressed() && canDash) {
                canDash = false
                player.vx = controller.left.isPressed() ? -280 : 280
                pause(250)
                canDash = true
            }
        })
    }

    export function getPlayer(): Sprite {
        return player
    }
}
