(function() {
    
    function loadUI() {
        $('.room-background').css('background','url("http://i.imgur.com/1aw3xcd.png")');
        $('head').append('<style type=text/css id=tastyplug-css>body { background: url("http://i.imgur.com/1aw3xcd.png"); background-repeat: no-repeat; background-size: cover; }#iBot { min-width: 200px; min-height: 185px; position: absolute; top: 54px; left: 0; background: yellow; }</style>');
        $('body').append('<div id="iBot"></div>');
    }
    
    loadUI();
    
}).call(this);
