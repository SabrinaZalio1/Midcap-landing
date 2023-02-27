$(document).ready(function () {

    $(".search-icon").click(function () {
        $(".searchbar-container").toggle();
    });

    $('.btn-class').click(function () {
        if ($(this).find('.search-icon').text() == 'search') {
            $(this).find('.search-icon').text('close');
        } else {
            $(this).find('.search-icon').text('search');
        }
    });

    $(".menu-icon").click(function () {
        $(".menu-mb-container").toggle("slide");

        // $(".menu-mb-link").click(function () {
        //     $(".header-dt-menu-icon-active").toggle();
        // });

    });

});
