namespace RedLine {
    /**
     * Spawn a basic enemy
     */
    export function spawnEnemy(x: number, y: number) {
        let enemy = sprites.create(img`
            . . . . . . 
            . 4 4 4 4 . 
            4 4 4 4 4 4 
            . 4 4 4 4 . 
            . . . . . . 
        `, SpriteKind.Enemy)
        enemy.setPosition(x, y)
        enemy.follow(RedLine.getPlayer(), 60)
    }
}
