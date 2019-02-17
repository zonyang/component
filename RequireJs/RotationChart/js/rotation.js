define(['jquery'], function () {
	function Rotation(settings) {
		this.defaultSetters = {
			imgs: ['../../images/1.jpg',
				'../../images/2.jpg',
				'../../images/3.jpg',
				'../../images/4.jpg'],
			arrowStyle: 'left',
			tabStyle: 'square',
			speed: 1000
		};
		if (settings) {
			$.extend(this.defaultSetters, settings);
		}
		this.$container = $('<div class="rotation-container"></div>');
		this.$images = $('<div class="rotation-images"></div>');
		this.$tabs = $('<ul class="rotation-tabs"></ul>');
		this.$arrows = $('<div class="arrows"></div>');
		this.$arrowLeft = $('<div class="arrow-left">&lt;</span></div>');
		this.$arrowRight = $('<div class="arrow-right">&gt;</div>');
	}

	Rotation.prototype.init = function () {
		const _this = this;
		let index = 0;
		this.$container.append(this.$images);
		this.$container.append(this.$tabs);
		this.$arrows.addClass(this.defaultSetters.arrowStyle).append(this.$arrowLeft);
		this.$arrows.append(this.$arrowRight);
		this.$container.append(this.$arrows);
		for (let i = 0, length = this.defaultSetters.imgs.length; i < length; i++) {
			this.$images.append('<img src=' + this.defaultSetters.imgs[i] + ' alt="">')
			this.$tabs.append('<li>' + (this.defaultSetters.tabStyle === "circle" ? '' : (i + 1)) + '</li>');
			this.$tabs.children().eq(i).addClass(this.defaultSetters.tabStyle);
		}
		this.$images.children().eq(0).addClass("active");
		this.$tabs.children().eq(0).addClass("active");

		$("li", _this.$tabs).hover(function () {
			clearTimeout(_this.timer);
			index = $(this).index();
			active();
		}, function () {
			play();
		});
		this.$arrowRight.on("click", function () {
			clearTimeout(_this.timer);
			index++;
			if (index === _this.$images.children().length) {
				index = 0;
			}
			active();
			play();
		});
		this.$arrowLeft.on("click", function () {
			clearTimeout(_this.timer);
			index--;
			if (index === -1) {
				index = _this.$images.children().length - 1;
			}
			active();
			play();
		});

		function active() {
			_this.$images.children().eq(index).addClass("active")
				.siblings().removeClass("active");
			_this.$tabs.children().eq(index).addClass("active")
				.siblings().removeClass("active");
		}

		function play() {
			_this.timer = setInterval(function () {
				index++;
				if (index === _this.$images.children().length) {
					index = 0;
				}
				active(index);
			}, _this.defaultSetters.speed);
		}

		play();
	};
	return Rotation;
});