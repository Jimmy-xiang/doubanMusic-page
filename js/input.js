(function ($) {
    $.fn.extend({
        search: function (opstions) {
            var opts = opstions;
            opts.father = this || $('body')
            new getData(opts).init();
        }
    })
    function getData(opts) {
        this.opts = opts || {};
        this.wrap = this.opts.father;
    }
    getData.prototype = {
        init: function () {
            this.createDom();
            this.bindEvent();
        },
        deBounce: function (handle, delay) {
            var timer = null;
            var _self = this;
            return function () {
                var arg = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    handle.apply(_self, arg);
                }, delay);
            }
        },
        createDom: function () {
            var inpStr = '<input type="text" placeholder=' + this.opts.text + ' class="oInput">\
            <input type="submit" class="inp-btn" value: '+ this.opts.btnValue + '>';
            this.wrap.html(inpStr)
        },
        bindEvent: function () {
            var self = this;
            $('.oInput').on('input', this.deBounce(this.getAjax, 350))
            $(document).on('click', function (e) {
                if ($(e.target).closest('#nav-search') !== $('#nav-search') || $(e.target).attr('class') === 'inp-btn') {
                    $('.input-show').css('display', 'none')
                }
            })
            $('.inp-btn').on('click', function () {
                var _val = $('.oInput').val();
                if (_val != '') {
                    window.open('https://music.douban.com/subject_search?search_text=' + _val + '&cat=1003', '', '', '', '');
                }
            });
        },

        getAjax: function (e) {
            var value = e.target.value;
            $.ajax({
                url: this.opts.url,
                type: this.opts.type,
                data: this.opts.data + value + this.opts.count,
                dataType: this.opts.dataType,
                success: this.opts.sucFn,
                error: this.opts.errFn,
            })
        }
    }
}($))