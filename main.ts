namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const laser = SpriteKind.create()
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
function Bossarm () {
    Bossarm2 = sprites.create(assets.image`myBossArm`, SpriteKind.Boss)
    animation.runImageAnimation(
    Bossarm2,
    assets.animation`myAnimBossarm`,
    150,
    false
    )
    Bossarm2.setPosition(80, randint(60, 150))
    if (gameMode == true) {
        pause(1500)
        laser2 = sprites.createProjectileFromSprite(assets.image`myLaser`, Bossarm2, 0, 0)
        laser2.setPosition(Bossarm2.x, Bossarm2.y)
        animation.runImageAnimation(
        laser2,
        assets.animation`myAnimLaser`,
        100,
        false
        )
        pause(3000)
        sprites.destroy(laser2)
        pause(3000)
        sprites.destroy(Bossarm2)
    }
}
function Level2 () {
    currentLevel = 2
    scene.setBackgroundImage(assets.image`Level2`)
    gameMode = true
    myEnemy2()
}
function myBoss2 () {
    myBoss = sprites.create(assets.image`BossLady`, SpriteKind.Boss)
    myBoss.setPosition(250, 35)
    animation.runImageAnimation(
    myBoss,
    assets.animation`myAnimBoss`,
    150,
    true
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function Level3 () {
    currentLevel = 3
    scene.setBackgroundImage(assets.image`Level3`)
    gameMode = true
}
function AnimationPlayerStationary () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    50,
    true
    )
}
info.onScore(10, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level4()
})
info.onScore(2, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level1_D()
})
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
    pause(3000)
    Level2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.ashes)
    sprites.destroy(laser2)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    info.changeLifeBy(-1)
})
function myLevel1 () {
    pause(1000)
    color.clearFadeEffect()
    gameMode = true
    currentLevel = 1
    scroller.scrollBackgroundWithSpeed(-60, 0)
    scene.setBackgroundImage(assets.image`Level1`)
    myPlayer()
}
info.onScore(3, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level2_D()
})
function Level4 () {
    currentLevel = 4
    scene.setBackgroundImage(assets.image`Level3`)
    info.setLife(3)
    gameMode = true
}
function Level3_D () {
    gameMode = false
    currentLevel = 3.5
    info.setLife(3)
    scene.setBackgroundImage(assets.image`Level3`)
    myBoss2()
    story.startCutscene(function () {
        story.printCharacterText("U-Oh- That's my wife-", "Boss")
        pause(200)
        story.spriteMoveToLocation(myBoss, 130, 55, 80)
        story.printCharacterText("...", "CEO's wife")
        story.printCharacterText("I also accidentally made a purchase with a work card.", "CEO's wife")
        story.printCharacterText("and you are in my way.", "CEO's wife")
        story.printText(":)", 130, 35)
        story.cancelAllCutscenes()
    })
    pause(1000)
    Level4()
}
function Level2_D () {
    gameMode = false
    currentLevel = 2.5
    info.setLife(3)
    scene.setBackgroundImage(assets.image`Level3`)
    story.startCutscene(function () {
        story.printCharacterText("Hey, did you hear that? Anyway, you know the drill.", "Boss")
        story.cancelAllCutscenes()
    })
    pause(2000)
    Level3()
}
function myEnemy2 () {
    trash_2 = sprites.create(assets.image`TrashCan`, SpriteKind.Enemy)
    trash_2.setPosition(160, randint(10, 90))
    trash_2.setVelocity(randint(-40, -20), 0)
    trash_2.setFlag(SpriteFlag.AutoDestroy, true)
}
info.onScore(5, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Level3_D()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    otherSprite.startEffect(effects.fire)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
})
function myEnemy () {
    trash_1 = sprites.create(assets.image`TrashPaper`, SpriteKind.Enemy)
    trash_1.setPosition(160, randint(10, 90))
    trash_1.setVelocity(randint(-50, -50), 0)
    trash_1.setFlag(SpriteFlag.AutoDestroy, true)
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
let myBoss: Sprite = null
let currentLevel = 0
let laser2: Sprite = null
let Bossarm2: Sprite = null
let mySprite: Sprite = null
let gameMode = false
scene.setBackgroundImage(assets.image`TitleScreen`)
gameMode = true
game.splash("Trash Factory")
color.FadeToBlack.startScreenEffect(1000)
music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
pause(500)
color.clearFadeEffect()
story.startCutscene(function () {
    scene.setBackgroundImage(assets.image`TalkingBoss`)
    story.setPagePauseLength(2500, 4000)
    story.printCharacterText("You're here.", "Boss")
    story.printCharacterText("Good.", "Boss")
    story.printCharacterText("I'll get to the main point.", "Boss")
    story.printCharacterText("I need you to use our new special tool for recycling.", "Boss")
    story.printCharacterText("Don't ask questions if you want to get paid.", "Boss")
    story.showPlayerChoices("Sure.", "You pay me?")
    if (story.checkLastAnswer("Sure.")) {
        story.printCharacterText("Don't disappoint me.", "Boss")
    }
    if (story.checkLastAnswer("You pay me?")) {
        story.printCharacterText("Get. Out.", "Boss")
        scene.setBackgroundImage(assets.image`FreedomEnding`)
        game.splash("You never got any money.")
        pause(2000)
        game.gameOver(true)
    }
    color.FadeToBlack.startScreenEffect(1000)
    if (gameMode != true) {
        myLevel1()
    }
    story.cancelAllCutscenes()
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
        if (currentLevel == 4) {
            Bossarm()
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
