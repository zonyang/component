require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../RotationChart/js/jquery-3.3.1'
	}
});
require(['jquery','dialog'],function ($,Dialog) {
	$("#open").on("click",function () {
		Dialog1Setters = {
			width: "400",
			height: "200",
			// title: ""
			// titleHeight: "25px",
		};
		const dialog1 =new Dialog(Dialog1Setters);
		dialog1.open();
	})
});