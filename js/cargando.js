var loadState = {
	preload: function(){
		var txtLoading = juego.add.text(juego.world.centerX,150,'Loading...',{font:'15px emulogic',fill:'#fff'});
			txtLoading.anchor.set(.5);
	
		var progressBar = juego.add.sprite(juego.world.centerX,250,'progressBar');
			progressBar.anchor.set(.5);
			
		juego.load.setPreloadSprite(progressBar);
		
		juego.load.image('bg','img/bg.png');
		juego.load.image('block','img/block.png');
		juego.load.image('end','img/end.png');
		juego.load.image('part','img/part.png');
		juego.load.image('part2','img/part2.png');		
		juego.load.image('llave','img/llave.png');
		
		juego.load.spritesheet('svida','img/vida.png',15.8,14)
		juego.load.spritesheet('player','img/walk.png',32,64);
		juego.load.spritesheet('puerta','img/puerta.png',62.6,85,5)
		juego.load.spritesheet('start','img/play2.png',200,71);
		juego.load.spritesheet('coin','img/coin.png',32,32);
		juego.load.spritesheet('enemigo','img/zombies.png',32,32);
		
		
		juego.load.audio('musiccoin','sfx/getitem.ogg');
		juego.load.audio('musicenemigo','sfx/loseitem.ogg');
		juego.load.audio('music','sfx/music.ogg');

		juego.physics.startSystem(Phaser.Physics.ARCADE);
	},
	create: function(){
		juego.state.start('menu');
	}
};
