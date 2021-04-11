var level8State = {
	create: function(){
		
		this.onGame = true;
		this.ganar = false;
		this.vida = 200;
		this.music=juego.add.audio('music');
		this.music.loop = true;
		this.music.volume = 0.3;
		this.music.play();

		this.musiccoin = juego.add.audio('musiccoin');
		this.musiccoin.volume = 0.5;

		this.musicenemigo = juego.add.audio('musicenemigo');
		this.musicenemigo.volume = 0.5;

		juego.add.sprite(0,0,'bg');
		
		this.mapa = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,3,4,0,0,0,0,3,0,0,0,0,0,3,1],
			[1,0,1,1,0,1,0,1,1,1,0,1,1,0,1],
			[1,0,1,3,0,1,3,0,0,1,0,3,1,0,1],
			[1,0,0,0,1,1,1,1,0,1,0,1,1,0,1],
			[1,0,0,0,0,1,0,2,0,0,0,0,0,0,1],
			[1,0,1,3,0,0,0,0,1,0,0,3,1,0,1],
			[1,0,1,1,1,1,0,1,1,0,1,1,1,0,1],
			[1,3,0,0,0,0,0,3,1,3,0,0,5,3,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		];
		
		this.blocks = juego.add.group();
		this.blocks.enableBody = true;
		
		this.pmoneda = [];

		for(var fil in this.mapa){
			for(var col in this.mapa[fil]){
				var lugar = this.mapa[fil][col];
				
				var x = col * 50;
				var y = fil * 50;
				
				if(lugar === 1){
					var block = this.blocks.create(x,y,'block');
					block.body.immovable = true;
				}
				else if(lugar === 2){
						this.player = juego.add.sprite(x+25,y+45,'player');
						this.player.anchor.set(0.5);
						this.player.scale.setTo(0.9,0.7);
						juego.physics.arcade.enable(this.player);
						this.player.animations.add('s',[1,2,3,4,5,4],10,true);
						this.player.animations.add('w',[7,8,9,10,11,10],10,true);
						this.player.animations.add('a',[13,14,15,16,17,16],10,true);
						this.player.animations.add('d',[19,20,21,22,23,22],10,true);

				}
				else if( lugar === 3){
					var position ={
						x: x + 25,
						y: y + 25
					};
					this.pmoneda.push(position);
				}
				else if(lugar === 4){
					this.puerta = juego.add.sprite(x,y-10,'puerta');
					//this.puerta.anchor.set(0.5);
					this.puerta.scale.setTo(0.7,0.7);
					this.puerta.animations.add('abrirp',[0,1,2,3,4],5,true);
					juego.physics.arcade.enable(this.puerta);
				}
				else if(lugar === 5){
					this.llave = juego.add.sprite(x,y+10,'llave');
					this.llave.scale.setTo(0.3,0.3);
					juego.physics.arcade.enable(this.llave);
				}

				
			}
			
		}
		this.enemigo = juego.add.sprite(75,75,'enemigo');
		this.enemigo.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo);
		this.enemigo.animations.add('camabajo',[0,1,2],10,true);
		this.enemigo.animations.add('camarriba',[36,37,38],10,true);
		this.enemigo.animations.add('camizqui',[12,13,14],10,true);
		this.enemigo.animations.add('camdere',[24,25,26],10,true);
		this.enemigo.direction = 'DOWN';
		this.enemigo.body.immovable = true;
		//enemigo 2
		this.enemigo2 = juego.add.sprite(75,75,'enemigo');
		this.enemigo2.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo2);
		this.enemigo2.animations.add('camabajo',[3,4,5],10,true);
		this.enemigo2.animations.add('camarriba',[39,40,41],10,true);
		this.enemigo2.animations.add('camizqui',[15,16,17],10,true);
		this.enemigo2.animations.add('camdere',[27,28,29],10,true);
		this.enemigo2.direction = 'DOWN';
		this.enemigo2.body.immovable = true;
		//enemigo 3
		this.enemigo3 = juego.add.sprite(75,75,'enemigo');
		this.enemigo3.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo3);
		this.enemigo3.animations.add('camabajo',[6,7,8],10,true);
		this.enemigo3.animations.add('camarriba',[42,43,44],10,true);
		this.enemigo3.animations.add('camizqui',[18,19,20],10,true);
		this.enemigo3.animations.add('camdere',[30,31,32],10,true);
		this.enemigo3.direction = 'DOWN';
		this.enemigo3.body.immovable = true;
		//enemigo 4
		this.enemigo4 = juego.add.sprite(75,75,'enemigo');
		this.enemigo4.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo4);
		this.enemigo4.animations.add('camabajo',[9,10,11],10,true);
		this.enemigo4.animations.add('camarriba',[45,46,47],10,true);
		this.enemigo4.animations.add('camizqui',[21,22,23],10,true);
		this.enemigo4.animations.add('camdere',[24,25,26],10,true);
		this.enemigo4.direction = 'DOWN';
		this.enemigo4.body.immovable = true;
		//enemigo 5
		this.enemigo5 = juego.add.sprite(75,75,'enemigo');
		this.enemigo5.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo5);
		this.enemigo5.animations.add('camabajo',[9,10,11],10,true);
		this.enemigo5.animations.add('camarriba',[45,46,47],10,true);
		this.enemigo5.animations.add('camizqui',[21,22,23],10,true);
		this.enemigo5.animations.add('camdere',[24,25,26],10,true);
		this.enemigo5.direction = 'DOWN';
		this.enemigo5.body.immovable = true;
		//enemigo 6
		this.enemigo6 = juego.add.sprite(75,75,'enemigo');
		this.enemigo6.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo6);
		this.enemigo6.animations.add('camabajo',[48,49,50],10,true);
		this.enemigo6.animations.add('camarriba',[84,85,86],10,true);
		this.enemigo6.animations.add('camizqui',[60,61,62],10,true);
		this.enemigo6.animations.add('camdere',[72,73,74],10,true);
		this.enemigo6.direction = 'DOWN';
		this.enemigo6.body.immovable = true;
		//enemigo 7
		this.enemigo7 = juego.add.sprite(75,75,'enemigo');
		this.enemigo7.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo7);
		this.enemigo7.animations.add('camabajo',[51,52,53],10,true);
		this.enemigo7.animations.add('camarriba',[87,88,89],10,true);
		this.enemigo7.animations.add('camizqui',[63,64,65],10,true);
		this.enemigo7.animations.add('camdere',[75,76,77],10,true);
		this.enemigo7.direction = 'DOWN';
		this.enemigo7.body.immovable = true;
		//enemigo 8
		this.enemigo8 = juego.add.sprite(75,75,'enemigo');
		this.enemigo8.anchor.set(0.5);
		juego.physics.arcade.enable(this.enemigo8);
		this.enemigo8.animations.add('camabajo',[54,55,56],10,true);
		this.enemigo8.animations.add('camarriba',[90,91,92],10,true);
		this.enemigo8.animations.add('camizqui',[66,67,68],10,true);
		this.enemigo8.animations.add('camdere',[78,79,80],10,true);
		this.enemigo8.direction = 'DOWN';
		this.enemigo8.body.immovable = true;

		this.coin = {};
		this.coin.position = this.newPosicion();
		this.coin = juego.add.sprite(this.coin.position.x,this.coin.position.y,'coin');
		this.coin.anchor.set(0.5);
		this.coin.animations.add('rod',[0,1,2,3,4,5,6,7,8,9],12,true).play();
		juego.physics.arcade.enable(this.coin);


		
		this.txtcoin = juego.add.text(15,15,'COINS: '+ this.cointex(juego.global.coins),{font:'15px emulogic',fill:'#fff'});

		this.controles = juego.input.keyboard.createCursorKeys();

		this.txtlevel = juego.add.text(15,470,'LEVEL: 08',{font: '15px emulogic',fill:'#fff'});

		this.emitter = juego.add.emitter(0,0,15);
		this.emitter.makeParticles('part');
		this.emitter.setXSpeed(-50,50);
		this.emitter.setYSpeed(-50,50);
		this.emitter.gravity.y = 0;
		//PART 2
		this.emitter2 = juego.add.emitter(0,0,40);
		this.emitter2.makeParticles('part2');
		this.emitter2.setXSpeed(-100,50);
		this.emitter2.setYSpeed(-100,50);
		this.emitter2.gravity.y = 0;
		
		this.svida = juego.add.sprite(juego.world.centerX,30,'svida');
		this.svida.anchor.set(0.5);
		this.svida.animations.add('toda',[9,8,7,4,3,2,1,0],10,true).play();
		this.svida.scale.setTo(2,2);
		this.txtvida = juego.add.text(juego.world.centerX,30-10,'  = '+ this.cointex(juego.global.vida),{font:'15px emulogic',fill:'#fff'});



		this.time = 60;
		this.txttime = juego.add.text(juego.world.width - 15,15,'TIME: '+this.cointex(this.time),{font:'15px emulogic',fill:'#fff'});
		this.txttime.anchor.set(1,0);
		this.timer = juego.time.events.loop(1000,function(){
			this.time--;
			this.txttime.text = 'TIME: ' + this.cointex(this.time);
		},this);
	},
	update: function(){
		if(this.onGame===true){
			juego.physics.arcade.collide(this.player,this.blocks);
			juego.physics.arcade.collide(this.enemigo8,this.blocks);
			
			juego.physics.arcade.overlap(this.player,this.coin,this.playercoin,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo2,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo3,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo4,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo5,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo6,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo7,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.enemigo8,this.enemigoplayer,null,this);
			juego.physics.arcade.overlap(this.player,this.llave,this.abrirpuerta,null,this);
			juego.physics.arcade.overlap(this.player,this.puerta,this.pasarnivel,null,this);
			this.caminarenemigo();
			this.caminar();

			if(this.time < 1 || juego.global.vida < 1){
				this.gameOver();
			}
			
			
		}
		
	},
	abrirpuerta: function(){
		this.ganar = true;
		this.puerta.animations.play('abrirp');
		this.llave.kill();
		juego.time.events.add(1000,function(){
			this.puerta.animations.stop();
		},this);
		
		


	},
	pasarnivel: function(){
		if(this.ganar === true){
			juego.state.start('level9');
			this.music.stop();
		}
	},
	
	gameOver: function(){
		this.onGame=false;
		juego.time.events.remove(this.timer);

		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
		this.player.animations.stop();
		this.player.frame = 0;

		this.enemigo.animations.stop();
		this.enemigo.frame = 0;

		this.enemigo2.animations.stop();
		this.enemigo2.frame = 0;

		this.enemigo3.animations.stop();
		this.enemigo3.frame = 0;

		this.enemigo4.animations.stop();
		this.enemigo4.frame = 0;

		this.enemigo5.animations.stop();
		this.enemigo5.frame = 0;

		this.enemigo6.animations.stop();
		this.enemigo6.frame = 0;

		this.enemigo7.animations.stop();
		this.enemigo7.frame = 0;

		this.enemigo8.animations.stop();
		this.enemigo8.frame = 0;


		var txtGameOver = juego.add.text(juego.world.centerX,150,'GAME OVER',{font:'20px emulogic',fill:'#fff'})
		txtGameOver.anchor.set(0.5);

		juego.time.events.add(5000,function(){
			this.music.stop();
			juego.state.start('menu');
		},this)

	},
	enemigoplayer: function(){

		juego.global.vida--;
		this.txtvida.text = '  = '+ this.cointex(juego.global.vida);

		this.musicenemigo.play();
		this.emitter2.x = this.player.position.x;
		this.emitter2.y = this.player.position.y;
		this.emitter2.start(true,500,null,15);

	},


	caminarenemigo: function(){
		 if (Math.floor(this.enemigo.x  -25)%50 === 0 && Math.floor(this.enemigo.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo.x/50);
		 	var enemigorow = Math.floor(this.enemigo.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo.direction){
		 	case 'LEFT':
		 		this.enemigo.x -= 1;
		 		this.enemigo.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo.x += 1;
		 		this.enemigo.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo.y += 1;
		 		this.enemigo.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo.y -= 1;
		 		this.enemigo.animations.play('camarriba');
		 		break;
		 }
		 if (Math.floor(this.enemigo2.x  -25)%50 === 0 && Math.floor(this.enemigo2.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo2.x/50);
		 	var enemigorow = Math.floor(this.enemigo2.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo2.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo2.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo2.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo2.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo2.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo2.direction){
		 	case 'LEFT':
		 		this.enemigo2.x -= 1;
		 		this.enemigo2.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo2.x += 1;
		 		this.enemigo2.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo2.y += 1;
		 		this.enemigo2.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo2.y -= 1;
		 		this.enemigo2.animations.play('camarriba');
		 		break;
		 }

		 if (Math.floor(this.enemigo3.x  -25)%50 === 0 && Math.floor(this.enemigo3.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo3.x/50);
		 	var enemigorow = Math.floor(this.enemigo3.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo3.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo3.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo3.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo3.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo3.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo3.direction){
		 	case 'LEFT':
		 		this.enemigo3.x -= 1;
		 		this.enemigo3.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo3.x += 1;
		 		this.enemigo3.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo3.y += 1;
		 		this.enemigo3.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo3.y -= 1;
		 		this.enemigo3.animations.play('camarriba');
		 		break;
		 	}
		 	if (Math.floor(this.enemigo4.x  -25)%50 === 0 && Math.floor(this.enemigo4.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo4.x/50);
		 	var enemigorow = Math.floor(this.enemigo4.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo4.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo4.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo4.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo4.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo4.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo4.direction){
		 	case 'LEFT':
		 		this.enemigo4.x -= 1;
		 		this.enemigo4.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo4.x += 1;
		 		this.enemigo4.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo4.y += 1;
		 		this.enemigo4.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo4.y -= 1;
		 		this.enemigo4.animations.play('camarriba');
		 		break;
		 	}
		 	if (Math.floor(this.enemigo5.x  -25)%50 === 0 && Math.floor(this.enemigo5.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo5.x/50);
		 	var enemigorow = Math.floor(this.enemigo5.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo5.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo5.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo5.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo5.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo5.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo5.direction){
		 	case 'LEFT':
		 		this.enemigo5.x -= 1;
		 		this.enemigo5.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo5.x += 1;
		 		this.enemigo5.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo5.y += 1;
		 		this.enemigo5.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo5.y -= 1;
		 		this.enemigo5.animations.play('camarriba');
		 		break;
		 	}
		 	if (Math.floor(this.enemigo6.x  -25)%50 === 0 && Math.floor(this.enemigo6.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo6.x/50);
		 	var enemigorow = Math.floor(this.enemigo6.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo6.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo6.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo6.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo6.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo6.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo6.direction){
		 	case 'LEFT':
		 		this.enemigo6.x -= 1;
		 		this.enemigo6.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo6.x += 1;
		 		this.enemigo6.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo6.y += 1;
		 		this.enemigo6.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo6.y -= 1;
		 		this.enemigo6.animations.play('camarriba');
		 		break;
		 	}
		 	if (Math.floor(this.enemigo7.x  -25)%50 === 0 && Math.floor(this.enemigo7.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo7.x/50);
		 	var enemigorow = Math.floor(this.enemigo7.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo7.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo7.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo7.direction !== 'DOWN'){
		 		validpath.push('UP');
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo7.direction !== 'UP'){
		 		validpath.push('DOWN');
		 	}
		 	this.enemigo7.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo7.direction){
		 	case 'LEFT':
		 		this.enemigo7.x -= 1;
		 		this.enemigo7.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo7.x += 1;
		 		this.enemigo7.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo7.y += 1;
		 		this.enemigo7.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo7.y -= 1;
		 		this.enemigo7.animations.play('camarriba');
		 		break;
		 	}
		 	this.enemigo8.body.velocity.x = 0;
			this.enemigo8.body.velocity.y = 0;
		 	if (Math.floor(this.enemigo8.x  -25)%50 === 0 && Math.floor(this.enemigo8.y - 25)%50 ===0){
		 	var enemigocol = Math.floor(this.enemigo8.x/50);
		 	var enemigorow = Math.floor(this.enemigo8.y/50);
		 	var validpath = [];
		 	if(this.mapa[enemigorow][enemigocol-1] !== 1 && this.enemigo8.direction !== 'RIGHT'){
		 		validpath.push('LEFT');
		 		
		 	}
		 	if(this.mapa[enemigorow][enemigocol+1] !== 1 && this.enemigo8.direction !== 'LEFT'){
		 		validpath.push('RIGHT');
		 		
		 	}
		 	if(this.mapa[enemigorow-1][enemigocol] !== 1 && this.enemigo8.direction !== 'DOWN'){
		 		validpath.push('UP');
		 		
		 	}
		 	if(this.mapa[enemigorow+1][enemigocol] !== 1 && this.enemigo8.direction !== 'UP'){
		 		validpath.push('DOWN');
		 		
		 	}
		 	this.enemigo8.direction = validpath[Math.floor(Math.random()*validpath.length)];
		 	
		 }

		 switch(this.enemigo8.direction){
		 	case 'LEFT':
		 		this.enemigo8.x -= 2;
		 		this.enemigo8.animations.play('camizqui');
		 		break;
		 	case 'RIGHT':
		 		this.enemigo8.x += 2;
		 		this.enemigo8.animations.play('camdere');
		 		break;
		 	case 'DOWN':
		 		this.enemigo8.y += 2;
		 		this.enemigo8.animations.play('camabajo');
		 		break;
		 		case 'UP':
		 		this.enemigo8.y -= 2;
		 		this.enemigo8.animations.play('camarriba');
		 		break;
		 	}
		 
	},
	playercoin: function(){
		this.emitter.x = this.coin.position.x;
		this.emitter.y = this.coin.position.y;
		this.emitter.start(true,500,null,15);

		this.musiccoin.play();
		juego.global.coins++;
		juego.global.highScore++;
		this.txtcoin.text = 'COINS: '+ this.cointex(juego.global.coins);
		this.coin.position = this.newPosicion();

		

	},
	cointex: function(value){
		if (value < 10){
			return '00' + value.toString();
		}
		if ( value < 100){
			return '0' + value.toString();
		}
		return value.toString();
	},
	caminar: function(){
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y =0;
		if(this.controles.left.isDown && !this.controles.right.isDown){
			this.player.body.velocity.x = -100;
			this.player.direction = "izquierda";
		}
		else if(this.controles.right.isDown && !this.controles.left.isDown){
			this.player.body.velocity.x = 100;
			this.player.direction = "derecha";
		}
		if(this.controles.up.isDown && !this.controles.down.isDown){
			this.player.body.velocity.y = -100;
			this.player.direction = "arriba";
		}
		else if(this.controles.down.isDown && !this.controles.up.isDown){
			this.player.body.velocity.y = 100;
			this.player.direction = "abajo";
		}
		switch(this.player.direction){
			case "izquierda":
			this.player.animations.play("a");
			break;
			case "derecha":
			this.player.animations.play("d");
			break;
			case "arriba":
			this.player.animations.play("w");
			break;
			case "abajo":
			this.player.animations.play("s");
			break;
		}
		if(this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0){
			this.player.animations.stop();
		}
	},
	newPosicion: function(){
		var pos = this.pmoneda[Math.floor(Math.random() * this.pmoneda.length)];

		while(this.coin.position === pos){
			pos = this.pmoneda[Math.floor(Math.random() * this.pmoneda.length)];
 
		}
		return pos;
	}
	
};