(function() {
    
    var plugMe = {
            status: false,
            name: "PlugMe",
            version: "0.1",
            UI: true
        },
        settings = {
            show: true,
            autowoot: true,
            background: "Default",
            backgroundURL: "https://cdn.plug.dj/_/static/images/community/custom/2014winter/background.36c25eacab985b0feaaee1805ea53903f9f5c58a.jpg"
        },
        events = {
            woot: function() {
                $('#woot').click();
            },
            changeBackground: function(background, url) {
        		$('body').css('background','url(' + url + ')');
                settings.background = (background != null) ? settings.background = background : settings.background ;
                settings.backgroundURL = (background != null) ? settings.background = background : settings.background ;
        }
    };
    
    
    /*function kill() {}*/
    
    function loadUI() {
        $('head').append('<style type="text/css">#plugMe {background: none repeat scroll 0% 0% rgba(28, 31, 37, 0.8);min-width: 120px;min-height: 165px;position: absolute;top: 54px;left: 0;}#brand {opacity: 0.9;width: 100%;height: 50px;background: #499FDA;}#wrapper {padding: 10px;}#brand h3 {margin: 0;padding: 12px 0;font-family: Arial;font-weight: bold;font-size: 20px;text-align: center;color: #FFF3FC;cursor: default;}span.highlight {font-size: 16px;font-weight: bold;text-transform: uppercase;color: #FFFDFA;}#theme-select {width: 148px;color: #FFFFFF;font-size: 16px;font-weight: bold;border: none;height: 26px;-webkit-appearance: none;-moz-appearance: none;appearance: none;background: url(http://www.fundingstore.com/assets/img/selectbox-arrow.png) 96% / 15% no-repeat #20B390;padding: 0px 35px 0px 0px;border-radius: 3px;}</style>');
        $('body').append('<div id="plugMe"><div id="brand"><h3>plugMe</h3></div><select id="theme-select"><option value="https://cdn.plug.dj/_/static/images/community/custom/2014winter/background.36c25eacab985b0feaaee1805ea53903f9f5c58a.jpg">Default</option><option value="http://i.imgur.com/k9zVa92.png">Skygazer</option><option value="http://i.imgur.com/1aw3xcd.png">Abandoned Ballroom</option><option value="http://i.imgur.com/HG8mqaM.png">Ancient Ruins</option><option value="http://i.imgur.com/tOEACrk.png">Digital Desert</option><option value="http://i.imgur.com/JZjGLPH.png" >Off The Grid</option><option value="http://i.imgur.com/9DVTnnW.png">Mordor</option><option value="http://giant.gfycat.com/GleamingSeriousAlbino.gif">Gleaming Serious Albino</option><option value="http://i.imgur.com/WTylHRy.png">Digital Dungeon</option></select></div>');
    }
    
    function callEvents() {
        //if (settings.autowoot) events.woot();
        $("#theme-select").on('change', function() {
        	var background = $("#theme-select option:selected").text();
        	var backgroundURL = $("#theme-select option:selected").val();
        	events.changeBackground(background, backgroundURL);
    	})
    }
    
    
    function startup() {
        loadUI();
        callEvents();
        
        plugMe.status = true;
        
        if (plugMe.status == true) {
            setTimeout(function() {
                $("#brand").css("background", "#A9D133");
            }, 1000);
        }
        
        
    }
    
    startup()
    
}).call(this);
