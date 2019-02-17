require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../RotationChart/js/jquery-3.3.1'
	}
});
define(['jquery'], function ($) {
	function Dialog(otherSet) {
		this.defaultSetters = {
			width: "200",
			height: "150",
			titleHeight: "30",
			title: "提交表单"
		};
		if (otherSet) {
			$.extend(this.defaultSetters, otherSet);
		}
		this.$container = $('<div class="dialog-container"></div>');
		this.$mask = $('<div class="dialog-mask"></div>');
		this.$box = $('<div class="dialog-box"></div>');
		this.$title = $('<div class="dialog-title"></div>');
		this.$desc = $('<div class="dialog-desc">'+this.defaultSetters.title+'</div>');
		this.$close = $('<div class="dialog-close">×</div>');
		this.$content = $('<div class="dialog-content"></div>');
	}

	Dialog.prototype.open = function () {
		this.$container.append(this.$mask).append(this.$box);
		this.$box.css({
			width: this.defaultSetters.width + "px",
			height: this.defaultSetters.height + "px",
			marginTop: -this.defaultSetters.height / 2 + "px",
			marginLeft: -this.defaultSetters.width / 2 + "px"
		}).append(this.$title).append(this.$content);
		this.$title.css("height", this.defaultSetters.titleHeight + "px")
			.append(this.$desc).append(this.$close);
		this.$desc.css("line-height", this.defaultSetters.titleHeight + "px");
		this.$close.css("line-height", this.defaultSetters.titleHeight + "px");
		this.$content.load("form.html")

		// const that = this;
		$("body").append(this.$container);
		this.$close.on("click", function () {
			this.close();
		}.bind(this))
	};
	Dialog.prototype.close = function () {
		this.$container.remove();
	};
	return Dialog;
});