var juego = new Phaser.Game(750,500,Phaser.CANVAS);

	juego.global={
		vida: 100,
		coins: 0,
		highScore: 0

	};

	juego.state.add('arranque',arranque);
	juego.state.add('cargando',loadState);
	juego.state.add('menu',menuState);
	juego.state.add('gamover',gamover);
	juego.state.add('juego',Juego);
	juego.state.add('leveld',LevelD);
	juego.state.add('level3',level3State);
	juego.state.add('level4',level4State);
	juego.state.add('level5',level5State);
	juego.state.add('level6',level6State);
	juego.state.add('level7',level7State);
	juego.state.add('level8',level8State);
	juego.state.add('level9',level9State);
	juego.state.add('level10',level10State);
	juego.state.add('fin',fin);
	
	juego.state.start('arranque');
