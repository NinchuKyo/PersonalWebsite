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
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        $('#copywrite-date').html('© 2015-' + year + ' David Nguyen, ');
    });
    
    $(window).load(function() { 
        $('.parallax').parallax();
        $('#header-image').hide(0).delay(500).fadeIn(1000);
        $('#header-text').hide(0).delay(1200).fadeIn(2000);
        $('#sub-header').removeClass("white-text").addClass("light-green-text");
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > $('#thiswebsite').offset().top)
        {
            $('#todo_site').html('<i class="fa fa-check-square-o"></i> About This Site');
        }
        
        if ($(this).scrollTop() > $('#note').offset().top)
        {
            $('#todo_note').html('<i class="fa fa-check-square-o"></i> _Note');
        }
        
        if ($(this).scrollTop() > $('#sharepointreporting').offset().top)
        {
            $('#todo_sharepoint').html('<i class="fa fa-check-square-o"></i> SharePoint Reporting Tool');
        }

        if ($(this).scrollTop() > $('#twitterdatamining').offset().top)
        {
            $('#todo_twitter').html('<i class="fa fa-check-square-o"></i> Twitter Data Mining');
        }

        if ($(this).scrollTop() > $('#tts').offset().top)
        {
            $('#todo_tts').html('<i class="fa fa-check-square-o"></i> Task Tracker System');
        }
    }); 
    
    $('.button-collapse').sideNav();     
});