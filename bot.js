(function() {
    
    var plugMe = {
        status: false,
        name: "PlugMe",
        version: "0.1",
        UI: true,
        settings: {}
    };
    
    /*function kill() {}*/
    
    function loadUI() {
        $('.room-background').css('background','url("http://i.imgur.com/1aw3xcd.png")');
        $('head').append('<style type="text/css">body {background: url("http://i.imgur.com/1aw3xcd.png");background-repeat: no-repeat;background-size: cover;}#iBot {background: none repeat scroll 0% 0% rgba(28, 31, 37, 0.7);min-width: 180px;min-height: 165px;position: absolute;top: 54px;left: 0;}#brand {opacity: 0.9;width: 75px;height: 50px;background: #499FDA;}#brand h3 {margin: 0;padding: 12px 0;font-family: Arial;font-weight: bold;font-size: 20px;text-align: center;color: #FFF3FC;cursor: default;}</style>');
        $('body').append('<div id="iBot"><div id="brand"><h3>iBot</h3></div></div>');
    }
    
    function startup() {
        if (plugMe.UI) {
            loadUI();
        }
        
        plugMe.status = true;
        
        if (plugMe.status && plugMe.UI) {
            setTimeout(function() {
                $("brand").css("background", "#A9D133");
            }, 10);
        }
    }
    
    startup();
    
}).call(this);
