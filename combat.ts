namespace RedLine {
    export function spawnEnemy(x: number, y: number, kind: number) {
        let enemy = sprites.create(img`
            . . . . . . 
            . 4 4 4 4 . 
            4 4 4 4 4 4 
            . 4 4 4 4 . 
            . . . . . . 
        `, SpriteKind.Enemy)  // Black/red enemy
        enemy.setPosition(x, y)
        enemy.follow(RedLine.getPlayer(), 50)  // Basic AI
    }

    // Boss example placeholder
    export function createBoss() {
        // Larger sprite, more HP, special attacks
    }
}
