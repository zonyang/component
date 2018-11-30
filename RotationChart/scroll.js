(function() {
    var mask = document.getElementById("mask"),
        photos = document.getElementById("photos"),
        img = photos.getElementsByTagName("li"),
        tab = document.getElementById("tab"),
        tab_list = tab.getElementsByTagName("li"),
        pre_arrow = document.getElementById("pre_arrow"),
        next_arrow = document.getElementById("next_arrow");
    var current_index = 1;
    var timer;
    automatic();
    for(var i = 0; i<tab_list.length; i++) {
        var current_list = tab_list[i];
        current_list.index = i;
        current_list.onmouseover = function() {
            current_index = this.index+1;
            clearInterval(timer);
            showImg(current_index);
            arrow.className = "select";
        };
        current_list.onmouseout = function() {
            arrow.className = "";
            automatic();
        }
    }
    mask.onmouseover = function() {
        clearInterval(timer);
        arrow.className = "select";
    };
    mask.onmouseout = function() {
        automatic();
        arrow.className = "";
    };
    pre_arrow.onmouseover = function() {
        pre_arrow.className = "select";
        arrow.className = "select";
    };
    pre_arrow.onmouseout = function() {
        pre_arrow.className = "";
        arrow.className = "";
    };
    next_arrow.onmouseover = function() {
        next_arrow.className = "select";
        arrow.className = "select";
    };
    next_arrow.onmouseout = function() {
        next_arrow.className = "";
        arrow.className = "";
    };
    pre_arrow.onmousedown = function() {
        clearInterval(timer);
        if((-- current_index) === -1) {
            current_index = img.length-3;
            photos.style.left = - (current_index + 1) * img[0].offsetWidth +"px";
        }
        showImg(current_index);
        automatic();
        return false;
    };
    next_arrow.onmousedown = function() {
        clearInterval(timer);
        if((++ current_index) === img.length) {
            current_index = 2;
            photos.style.left = - (current_index - 1 ) * img[0].offsetWidth+ "px";
        }
        showImg(current_index);
        automatic();
        return false;
    };
    function automatic() {
        timer = setInterval(function() {
            if((++ current_index) === img.length) {
                current_index = 2;
                photos.style.left = - (current_index - 1 ) * img[0].offsetWidth+ "px";
            }
            showImg(current_index);
        },3000);
    }
    function showImg(index) {
        for(var i=0; i<tab_list.length; i++) {
            tab_list[i].className = "";
        }
        if(index === (img.length -1)) {
            tab_list[0].className = "select";
        }else if(index === 0) {
            tab_list[tab_list.length-1].className = "select";
        }else{
            tab_list[index-1].className = "select";
        }
        moveElement(photos, { left: -img[0].offsetWidth*index });
    }
    function moveElement(elem, attr) {
        clearInterval(elem.timer);
        elem.timer = setInterval(function() {
            for(var key in attr) {
                if (attr.hasOwnProperty(key)){
                    var current = parseInt(getStyle(elem, key));
                    if(current  === attr[key]) {
                        clearInterval(elem.timer);
                    }
                    var speed = (current  -  attr[key]) / 10;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if(current !== attr[key]) {
                        photos.style.left = current - speed + "px";
                    }
                }
            }
        }, 10);
    }
    function getStyle(elem, attr) {
        if(elem.currentStyle) {
            return elem.currentStyle[attr];
        }
        return getComputedStyle(elem, null)[attr];
    }
})();