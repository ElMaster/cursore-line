+function ($) {
    'use strict';
    $.fn.timelineSlider = function (options) {
        options = $.extend({
            imgClass: '.stdimage',
            imgCalc: 'cnt'
        }, options);

        var TimeLine = function () {

            var $this = $(this);


            $this.mouseover(function () {
                $this.addClass("__thumbnail-timeline")
            }).mouseout(function () {
                $this.removeClass("__thumbnail-timeline")
            });


            $this.each(function () {
                var _self = $(this),

                    std_image = _self.find(options.imgClass),
                    img_size  = _self.find(options.imgClass).attr(options.imgCalc),
                    img_first = _self.find(options.imgClass).attr('src'),
                    timecodes = _self.find(".__timecodes");


                if (img_size) {

                    for (var i = 0; i < img_size; i++) {

                        var tamplates = $([
                            '<div data-scroll=":scroll" class="col" style="width: ', '%; left: :left%">' +
                            '<div class="position"></div>']
                            .join(100 / img_size)
                            .split(":left")
                            .join(100 * i / img_size)
                            .split(":scroll")
                            .join('src' + i))
                            .mouseenter(function () {
                                var a = std_image.attr($(this).data("scroll"));
                                // $('<img src="' + a + '"/>').init(function () {
                                    std_image.attr('src', a);
                                // })

                            });

                        timecodes.append(tamplates);
                    }

                    _self.mouseleave(function () {
                        std_image.attr('src', img_first);
                    });

                }
            })
        };


        return this.each(TimeLine)
    }
}(jQuery);


