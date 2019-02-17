define(function (require, exports, module) {
	function LeafFall(setting) {
		this.defaultSetting = {
			width: parseInt(Math.random() * 31) + 50,
			left: parseInt(Math.random() * $("body")[0].offsetWidth),
			speed: parseInt(Math.random() * 1000) + 10
		};
		if (setting) {
			$.extend(this.defaultSetting, setting);
		}
		this.width = this.defaultSetting.width;
		this.img = new Image();
		this.img.src = "img/" + parseInt(Math.random() * 4 + 1) + ".jpg";
	}

	LeafFall.prototype.fall = function () {
		$(this.img).addClass("fall");
		$(this.img).css({
			width: this.defaultSetting.width,
			left: this.defaultSetting.left
		});
		this.timer = setInterval(function () {
			$(this.img).css("top", this.img.offsetTop + 10 + "px")
		}.bind(this), this.defaultSetting.speed)

	};
	module.exports = LeafFall;
});