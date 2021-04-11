var arranque = {
	preload: function(){
		juego.load.image('progressBar','img/progressBar.png');
	},
	
	create: function(){
		juego.state.start('cargando');
	}
};
