import Phaser from 'phaser'
import GameScene from './scenes/GameScene'
import RoomScene from './scenes/RoomScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
  height: 500,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
	physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
	},
	scene: [GameScene, RoomScene]
}

export default new Phaser.Game(config)
