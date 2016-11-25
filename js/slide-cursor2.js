+function ($) {
    'use strict';
    $.fn.timelineSlider = function() {


        var TimeLine = function(){

            var _this = $(this),
                line = _this.find(".timeline");


            _this.hasClass("timeline-processed") || (_this.addClass("timeline-processed"),

                _this.mouseover(function() {
                    _this.addClass("thumbnail-timeline")
                }).mouseout(function() {
                    _this.removeClass("thumbnail-timeline")
                }),

                _this.each(function() {
                    var _self = $(this),
                        line_bg =           _self.find(".time-line-bg"),
                        img_resize =        _this.find(".stdimage").attr('cnt'),

                        thumbnail =         _this.hasClass("thumbnail-casting"),
                        timecodes =         _self.find(".timecodes"),
                        size =              timecodes.data("size"),
                        time_timecodes =    timecodes.data("timecodes"),
                        minutes,
                        second;
                    var ImgHeight = 5;
                    var sizer = 0;
                    var time_tim = 0;

                    // thumbnail && _self.click(function () {
                    //     location.href = _self.attr("href");
                    //     return false;
                    // });

                    if (time_timecodes) {


                                ImgHeight = img_resize.height();
                                if (ImgHeight <= 1500) {
                                     sizer = 5;
                                } else {
                                     sizer = 12;
                                }
                                line_bg.attr("sizer", sizer);
                                time_tim = line_bg.attr("sizer");


                                console.log(ImgHeight)
                                for (var i = 0; i < time_tim; i++) {


                                    var tamplates = $([
                                        '<div data-scroll=":scroll" class="col" style="width: ','%; left: :left%">' +
                                        '<div class="position"></div>']
                                        .join(100 / time_tim)
                                        .split(":left")
                                        .join(100 * i / time_tim)
                                        .split(":scroll")
                                        .join(i * size))
                                        .mouseenter(function() {
                                            var a = parseInt($(this).data("scroll"), 10);
                                            line_bg.css("backgroundPosition", "0px -" + a + "px")
                                        });

                                    timecodes.append(tamplates);
                                }






                        _self.mouseenter(function() {
                            _self.unbind("mouseenter");
                            _self.addClass("loading");

                            $('<img src="' + line_bg.attr("src") + '"/>').init(function() {
                                _self.addClass("loaded");
                                _self.removeClass("loading");
                                line_bg.css("backgroundImage", "url(" + line_bg.attr("src") + ")");
                            })
                        })

                    }
                }))
        };


        return this.each(TimeLine)
    }
}(jQuery);



$(".thumbnail").timelineSlider();