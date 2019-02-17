require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../RotationChart/js/jquery-3.3.1'
	}
});
require(['jquery', 'leafFall'], function ($, LeafFall) {
	for (let i = 0; i < 4; i++) {
		let setting = {
			width: parseInt(Math.random() * 31) + 50,
			left: parseInt(Math.random() * $("body")[0].offsetWidth),
			speed: parseInt(Math.random() * 100) + 100
		};
		let leaf = new LeafFall(setting);
		$("#container").append(leaf.img);
		leaf.fall();
	}
});