namespace SpriteKind {
    export const Background = SpriteKind.create()
}
function Scale () {
    mySprite.setScale(0.95, ScaleAnchor.Middle)
}
function myPlayer () {
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(mySprite, 150, 150)
    mySprite.setStayInScreen(true)
    info.setLife(3)
    info.setScore(0)
    AnimationPlayerStationary()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.clearAllText()
})
function Level2 () {
    currentLevel = 2
    scene.setBackgroundImage(assets.image`Level2`)
    gameMode = true
    myEnemy2()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`Fireball`, mySprite, 150, 0)
        animation.runImageAnimation(
        projectile,
        assets.animation`FirebalAnim`,
        200,
        true
        )
        music.play(music.createSoundEffect(WaveShape.Square, 1066, 1, 89, 0, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
})
function Level3 () {
    currentLevel = 3
    scene.setBackgroundImage(assets.image`Level3`)
    gameMode = true
}
info.onScore(9, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level3_D()
})
function Level1 () {
    pause(1000)
    color.clearFadeEffect()
    gameMode = true
    currentLevel = 1
    scroller.scrollBackgroundWithSpeed(-60, 0)
    scene.setBackgroundImage(assets.image`Level1`)
    myPlayer()
}
function AnimationPlayerStationary () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    50,
    true
    )
}
function myEnemy3 () {
    trash_3 = sprites.create(assets.image`TrashPaper0`, SpriteKind.Enemy)
    trash_3.setPosition(160, randint(10, 90))
    trash_3.setVelocity(randint(-35, -10), 0)
    trash_3.setFlag(SpriteFlag.AutoDestroy, true)
}
function Level1_D () {
    gameMode = false
    currentLevel = 1.5
    info.setLife(3)
    scene.setBackgroundImage(assets.image`Level2`)
    story.startCutscene(function () {
        story.printCharacterText("More trash incomming!!", "Boss")
        story.cancelAllCutscenes()
    })
    pause(4000)
    Level2()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onScore(3, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level1_D()
})
function Level4 () {
    currentLevel = 3
    scene.setBackgroundImage(assets.image`Level3`)
    gameMode = true
}
info.onScore(6, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level2_D()
})
function Level3_D () {
    gameMode = false
    currentLevel = 3.5
    info.setLife(3)
    scene.setBackgroundImage(assets.image`Level3`)
    story.startCutscene(function () {
        story.printCharacterText("Hey, did you hear that? Anyway, you know the drill.", "Boss")
        story.cancelAllCutscenes()
    })
    pause(6000)
    Level4()
}
function myBoss () {
    trash_3 = sprites.create(assets.image`BossLady`, SpriteKind.Enemy)
}
function Level2_D () {
    gameMode = false
    currentLevel = 2.5
    info.setLife(3)
    scene.setBackgroundImage(assets.image`Level3`)
    story.startCutscene(function () {
        story.printCharacterText("Good job more trash comming your way.", "Boss")
        story.cancelAllCutscenes()
    })
    pause(4000)
    Level3()
}
function myEnemy2 () {
    trash_2 = sprites.create(assets.image`TrashCan`, SpriteKind.Enemy)
    trash_2.setPosition(160, randint(10, 90))
    trash_2.setVelocity(randint(-40, -20), 0)
    trash_2.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    otherSprite.startEffect(effects.fire)
    sprites.destroy(projectile)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
})
function myEnemy () {
    trash_1 = sprites.create(assets.image`TrashPaper`, SpriteKind.Enemy)
    trash_1.setPosition(160, randint(10, 90))
    trash_1.setVelocity(randint(-50, -50), 0)
    trash_1.setFlag(SpriteFlag.AutoDestroy, true)
    Scale()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    otherSprite.startEffect(effects.none)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    info.changeLifeBy(-1)
})
let trash_1: Sprite = null
let trash_2: Sprite = null
let trash_3: Sprite = null
let projectile: Sprite = null
let currentLevel = 0
let mySprite: Sprite = null
let gameMode = false
scene.setBackgroundImage(assets.image`TitleScreen`)
gameMode = false
game.splash("Trash Factory")
color.FadeToBlack.startScreenEffect(1000)
music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
pause(500)
color.clearFadeEffect()
story.startCutscene(function () {
    scene.setBackgroundImage(assets.image`TalkingBoss`)
    story.setPagePauseLength(2000, 5000)
    story.printCharacterText("You're here.", "Boss")
    story.printCharacterText("Good.", "Boss")
    story.printCharacterText("I'll get to the main point.", "Boss")
    story.printCharacterText("I need you to use our new special tool for recycling.", "Boss")
    story.printCharacterText("Don't ask questions if you wanna get paid.", "Boss")
    story.showPlayerChoices("Sure.", "You pay me?")
    if (story.checkLastAnswer("Sure")) {
        story.printCharacterText("Don't dissapoint me", "Boss")
    }
    if (story.checkLastAnswer("You pay me?")) {
        story.printCharacterText("Get out.", "Boss")
        scene.setBackgroundImage(assets.image`FreedomEnding`)
        game.splash("You never got your last check.")
        pause(2000)
        game.gameOver(true)
    }
    story.cancelAllCutscenes()
    color.FadeToBlack.startScreenEffect(1000)
    if (gameMode != true) {
        Level1()
    }
})
game.onUpdateInterval(2000, function () {
    if (gameMode == true) {
        if (currentLevel == 1) {
            myEnemy()
        }
        if (currentLevel == 2) {
            myEnemy()
        }
        if (currentLevel == 3) {
            myEnemy()
            myEnemy2()
        }
    }
})
game.onUpdateInterval(3000, function () {
    if (gameMode == true) {
        if (currentLevel == 2) {
            myEnemy2()
        }
        if (currentLevel == 3) {
            myEnemy3()
        }
    }
})
