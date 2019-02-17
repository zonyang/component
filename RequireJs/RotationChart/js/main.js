require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../RotationChart/js/jquery-3.3.1'
	}
});
require(['jquery', 'rotation'], function ($, Rotation) {
	const settings = {
		imgs: ['../../images/1.jpg',
			'../../images/2.jpg',
			'../../images/3.jpg',
			'../../images/4.jpg'],
		arrowStyle: 'center',
		tabStyle: 'circle',
		speed: 1500
	};
	const rotation1 = new Rotation(settings);
	rotation1.init();
	$("#container1").append(rotation1.$container);
	const rotation2 = new Rotation();
	rotation2.init();
	$("#container2").append(rotation2.$container);
});