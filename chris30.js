(function ($) {

    $(function () {

        $('body').on('click', 'a[href="#"]', function (e) {

            e.preventDefault();
            e.stopPropagation();

            var target = $('#' + $(e.target).data('id'));
            
            $('.popup.visible').removeClass('visible');
            target.addClass('visible');

            var pwidth = target.width(),
                pheight = target.height(),
                bwidth = $(window).width(),
                bheight = $(window).height(); 

            target.css({
                top : (bheight / 2 - pheight / 2) + $(document).scrollTop(),
                left : (bwidth / 2 - pwidth / 2) + $(document).scrollLeft()
            });

        });

        $('body').on('click', '.controls button', function (e) {
            
            e.preventDefault();
            e.stopPropagation();

            $(e.target).closest('.popup').removeClass('visible');

        });

        $(document).on('click', 'body', function (e) {

            if ($(e.target).closest('.popup').size() === 0) {
                $('.popup.visible').removeClass('visible');
            }

        });

    });

}(jQuery));
