
//闭包限定命名空间
(function ($) {
    $.fn.extend({
        "highLight": function (options) {
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            this.each(function () {  //这里的this 就是 jQuery对象
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.foreground
                });
            });

        }
    });
    //默认参数
    var defaluts = {
        foreground: 'red',
        background: 'yellow'
    };
})(window.jQuery);


/**
 * $(function () {
    $("p").highLight(); //调用自定义 高亮插件
});
 * */



//闭包限定命名空间
(function ($) {
    $.fn.extend({
        "highLight": function (options) {
            //检测用户传进来的参数是否合法
            if (!isValid(options))
                return this;
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            return this.each(function () {  //这里的this 就是 jQuery对象。这里return 为了支持链式调用
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.foreground
                });
                //格式化高亮文本
                var markup = $this.html();
                markup = $.fn.highLight.format(markup);
                $this.html(markup);
            });

        }
    });
    //默认参数
    var defaluts = {
        foreground: 'red',
        background: 'yellow'
    };
    //公共的格式化 方法. 默认是加粗，用户可以通过覆盖该方法达到不同的格式化效果。
    $.fn.highLight.format = function (str) {
        return "<strong>" + str + "</strong>";
    }
    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
})(window.jQuery);



//调用
//调用者覆盖 插件暴露的共公方法
 $.fn.highLight.format = function (txt) {
        return "<em>" + txt + "</em>"
}
$(function () {
       $("p").highLight({ foreground: 'orange', background: '#ccc' }); //调用自定义 高亮插件
});






(function (win){
    function con(){
        var config = {
            "orgCode": "400000",
            "singnature": "【FIDE】",
            "invoker": "bpapp",
            "loginOut": "再按一次退出bp",
            "appId" :"1000",
            "appType":"0",
            "orgTelNum":"15158187372",
            "defaultCity":"杭州"
        };
        return {
            getConfig:function(){
                return config;
            }
        };
    }

    function initSwiperShow(){
        var swiper = new Swiper('#swiperScroll', {
            pagination: '.swiper-pagination',
            slidesPerView: 1.6,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 35
        });
    }
    win.con = con();
})(window);

//调用
con.getConfig().appType