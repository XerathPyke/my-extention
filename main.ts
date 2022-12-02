scene.setBackgroundColor(12)
effects.confetti.startScreenEffect()
pause(3000)
game.showLongText("Yeet!", DialogLayout.Bottom)
game.setDialogFrame(img`
    3 3 3 3 . . . . . . . 3 3 3 3 
    3 3 3 . . . . . . . . . 3 3 3 
    3 3 . . . . . . . . . . . 3 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 3 . . . . . . . . . . . 3 3 
    3 3 3 . . . . . . . . . 3 3 3 
    3 3 3 3 . . . . . . . 3 3 3 3 
    `)
game.setDialogTextColor(8)
effects.confetti.endScreenEffect()
music.powerDown.play()
