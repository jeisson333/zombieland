var menuState = {
	create: function(){
		this.music=juego.add.audio('music');
		this.music.loop = true;
		this.music.volume = 0.5;
		this.music.play();

		if(!localStorage.getItem('Zombies_highScore')){
			 localStorage.setItem('Zombies_highScore',0);
		}
		if(juego.global.highScore > localStorage.getItem('Zombies_highScore')){
			localStorage.setItem('Zombies_highScore',juego.global.highScore);

		}
		else {
			juego.global.highScore = localStorage.getItem('Zombies_highScore');
		}
		var txtScore = juego.add.text(juego.world.centerX,350,'SCORE: '+ juego.global.highScore,{font:'20px emulogic' ,fill: '#D26111'});
		txtScore.anchor.set(0.5);
		txtScore.alpha = 0;

		var txttitulo = juego.add.text(juego.world.centerX,150,'land of zombies',{font: '40px emulogic',fill:'#fff'});
		txttitulo.anchor.set(0.5);

		var txtPressStart = juego.add.text(juego.world.centerX,550,'PRESS START',{font:'20px emulogic',fill:'#fff'});
			txtPressStart.anchor.set(.5);
			
		juego.add.tween(txtPressStart).to({y:250},1000).start();

		juego.time.events.add(1000,function(){
			juego.add.tween(txtScore).to({alpha:1},500).to({alpha:0},500).loop().start();
			var enterkey = juego.input.keyboard.addKey(Phaser.Keyboard.ENTER);
			enterkey.onDown.addOnce(this.iniciarjuego,this);

		},this);
	},
	iniciarjuego: function(){
		this.music.stop();
		juego.state.start('juego');
	}
};
