var plug = {
    init: function () {
        this.slider();
        this.tab();
        this.input();
    },
    slider: function () {
        $('#sliderShowMax').sliderShowMax({
            image: ['./img/banner-2736.jpg', './img/banner-2732.jpg', './img/banner-2739.jpg', './img/banner-2734.jpg', './img/banner-2738.jpg', './img/banner-2737.jpg', './img/banner-2733.jpg', './img/banner-2723.jpg', './img/banner-2729.jpg', './img/banner-2727.jpg'],
            button: ['./img/btn_right.png'],
            btnSizeW: "36px",
            btnSizeH: "51px"
        })
    },
    tab: function () {
        // 选项卡插件
        $('#tab').tab({
            title: "",
            classify: ['音乐人', '上升最快音乐人', '本周流行音乐人'],
            end: "by:Jimmy",
            content: [
                [
                    {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    },
                    {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/1.jpg',
                        name: 'music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }
                ],
                [
                    {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    },
                    {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/2.jpg',
                        name: 'pop music',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }
                ],
                [
                    {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    },
                    {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }, {
                        img: './img/3.jpg',
                        name: 'rocknroll',
                        classify: 'Jimmy',
                        decoration: ['无名', '你和我', '手拿鲜花的女人', '冰的世纪']
                    }
                ]
            ]
        })
    },
    // input接口
    input: function () {
        $('#nav-search').search({
            text: '唱片名、表演者、条码、ISRC',
            btnValue: "搜索",
            type: 'GET',
            url: 'https://api.douban.com/v2/music/search',
            data: 'q=',
            dataType: 'jsonp',
            sucFn: addDom,
            count: '&count=7',
            errFn: function () {
                console.log('error')
            }
        })

        function addDom(data) {
            var dataArr = data.musics,
                len = dataArr.length,
                str = '';
            var oUl = $('<ul class="input-show"></ul>');
            if (len !== 0) {
                dataArr.forEach(function (ele, index) {
                    if (ele.image !== undefined) {
                        var reg = /https:\/\//g;
                        src = ele.image.replace(reg, 'https://images.weserv.nl/?url=')
                    }
                    str += '<li>\
                                <a href="' + ele.mobile_link + '">\
                                    <img src="' + src + '" alt="">\
                                    <span>\
                                        <p class="fir-txt">' + ele.title + '</p>\
                                        <p class="sec-txt">表演者:' + ele.author[0].name + '</p>\
                                    </span>\
                                </a>\
                            </li>';
                })
                oUl.html(str);
                $('#nav-search').append(oUl);
            } else {
                $('.input-show').css('display', 'none');
            }
        }

       
    }
}
plug.init();