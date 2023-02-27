$('.hero-banner-number').each(function () {
    const This = $(this);
    $({ Count: This.text() }).animate(
        { Count: This.attr('data-count') },
        {
            duration: 2000,
            easing: 'linear',
            step: function () {
                This.text(Math.floor(this.Count)
                )
            },
            // complete: function () {
            //     This.text(this.Count).css({ color: 'pink' })
            // }
        }
    )
})