(function ($) {
    $.fn.extend({
        //扩展插件为sliderShowMax；
        tab: function (opstions) {
            var opts = opstions;
            opts.father = this || $('body')
            new Swiper(opts);
        }
    })
    //构造工厂
    function Swiper(opts) {
        this.opts = opts || {}
        this.wrap = this.opts.father;
        this.init();
    }
    //入口函数
    Swiper.prototype.init = function () {
        this.boxWidth = this.wrap.width();
        this.createHeader();
        this.createTab();
        this.bindEvent();
    }
    //构建头部dom结构
    Swiper.prototype.createHeader = function () {
        var self = this;
        var tab_header = $('<div class="tab-header"></div>')
        var tab_classify_len = self.opts.classify.length;
        var tab_header_str = '';
        if (self.opts.title && self.opts.title != "") {
            tab_header_str += '<div class="tab-header-title">' + self.opts.title + '</div>';
        }
        for (var i = 0; i < tab_classify_len; i++) {
            if (i == tab_classify_len - 1) {
                tab_header_str += '<div class="tab-header-classify">' + self.opts.classify[i] + '</div>'
            } else {
                tab_header_str += '<div class="tab-header-classify">' + self.opts.classify[i] + ' |</div>'
            }
        }
        if (self.opts.end && self.opts.end != "") {
            tab_header_str += '<div class="tab-header-end">' + self.opts.end + '</div>';
        }
        tab_header.html(tab_header_str);
        $(self.wrap).append($(tab_header));
    }
    //构建切换页Tabdom结构
    Swiper.prototype.createTab = function () {
        var self = this;
        var contentArr = [];
        //创建多个tab界面
        for (var i = 0; i < self.opts.content.length; i++) {
            var tab_content = $('<div class="tab-content content1"></div>');
            var content_box_str = '';
            for (var a = 0, conlen = self.opts.content[i].length; a < conlen; a++) {
                var decoration_str = '';
                for (var b = 0, declen = self.opts.content[i][a].decoration.length; b < declen; b++) {
                    decoration_str += self.opts.content[i][a].decoration[b] + '<br>';
                }
                content_box_str += '<div class="tab-box">\
                                             <div class="bg-image">\
                                                 <div class="bg-text"><div class="text">' + decoration_str + '</div></div>\
                                                   <img src="'+ self.opts.content[i][a].img + '" alt="">\
                                                 <div class="tab-radius"><div class="tab-triangle"></div></div>\
                                             </div>\
                                               <a href="">' + self.opts.content[i][a].name + '</a>\
                                              <p> ' + self.opts.content[i][a].classify + ' </p>\
                                           </div>'
            }
            tab_content.html(content_box_str);
            contentArr.push(tab_content); 
        }
        for (var j = 0; j < contentArr.length; j++) {
            contentArr[j].appendTo(self.wrap);
        }
    }
    //绑定事件
    Swiper.prototype.bindEvent = function () {
        // 默认第一个显示状态；
        $('.tab-header-classify').eq(0).addClass("classIfy");
        $('.tab-content').eq(0).addClass('tab-active');
        // 绑定点击事件；
        $('.tab-header-classify').on('click', function () {
            $('.classIfy').toggleClass('classIfy')
            $(this).addClass("classIfy");
            var nowindex = $(this).index();
            $('.tab-active').removeClass('tab-active');
            $('.tab-content').eq(nowindex).addClass('tab-active');
        })
        // 绑定onmouseenter事件；
        $('.bg-image').on('mouseenter', function () {
            $(this).children().eq(0).addClass('bg-block')
            $('.tab-radius', $(this)).css('background-color', '#ddd');
            $('.tab-triangle', $(this)).css('border-left', '10px solid #222');
        }).on('mouseleave', function () {
            $(this).children().eq(0).removeClass('bg-block');
            $('.tab-radius', $(this)).css('background-color', '#222');
            $('.tab-triangle', $(this)).css('border-left', '10px solid #ddd');
        })
    }
}($))