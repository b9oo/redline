namespace RedLine {
    export function loadZone(zoneNumber: number) {
        scene.setBackgroundColor(0x000000)  // Black theme
        // Add tiles, platforms, etc.
        tiles.setTilemap(tiles.createTilemap(...))  // Customize per zone
        info.setScore(zoneNumber)
    }
}
