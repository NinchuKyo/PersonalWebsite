/* Layout JavaScript */
fallback.load({
    // JavaScript Libraries
    jQuery: [
        '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
        '/static/js/jquery-2.1.4.min.js'
    ],

    materialize_js: [
        '//cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js',
        '/static/js/materialize.min.js'
    ]
},  {
    shim: { 
        'materialize_js': ['jQuery']
    }

});

fallback.ready(function() {
    $(document).ready(function() {
        $('.scrollspy').scrollSpy();
    });
    $(window).load(function() { 
        $('.parallax').parallax();
        $('.parallax').hide(0).delay(500).fadeIn(1000);
        $('#header-text').hide(0).delay(1200).fadeIn(2000);
        $('#sub-header').removeClass("white-text").addClass("light-green-text");
    });
    $('.button-collapse').sideNav();
});