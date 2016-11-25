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

                line.each(function() {
                    var _self = $(this),
                        line_bg =           _self.find(".timeline-bg"),
                        thumbnail =         _this.hasClass("thumbnail-casting"),
                        timecodes =         _self.find(".timecodes"),
                        size =              timecodes.data("size"),
                        time_timecodes =    timecodes.data("timecodes"),
                        minutes,
                        second;

                    _self.data("timelineid");

                    thumbnail && _self.click(function () {
                        location.href = _self.attr("href");
                        return false;
                    });

                    if (time_timecodes) {

                        for (var i = 0; i < time_timecodes.length; i++) {
                            second = time_timecodes[i];

                            minutes = Math.floor(second / 60);
                            if ( 10 > minutes ) {
                                minutes = "0" + minutes
                            }
                            second = Math.floor(second % 60);
                            if (10 > second) {
                                second = "0" + second
                            }
                            var tamplates = $([
                                '<div data-scroll=":scroll" class="col" style="width: ','%; left: :left%">' +
                                    '<div class="time">:time' +
                                        '<div class="arrow1"></div>' +
                                        '<div class="arrow2"></div>' +
                                    '</div>'+
                                '<div class="position"></div>']

                                .join(100 / time_timecodes.length)
                                .split(":left")
                                .join(100 * i / time_timecodes.length)
                                .split(":scroll")
                                .join(i * size)
                                .split(":time")
                                .join(minutes + ":" + second))
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
                                line_bg.css("backgroundImage", "url(" + line_bg.attr("src") + ")")
                            })
                        })
                    }
                }))
        };


        return this.each(TimeLine)
    }
}(jQuery);



$(".thumbnail").timelineSlider();