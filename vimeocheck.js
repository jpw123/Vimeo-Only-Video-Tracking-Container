function vimeoCheck( modUrl, dataProgress, dataSeek, dataBounce, fullScreen, scriptUrl) {

	modUrl = typeof modUrl !== 'undefined' ? modUrl : true;
	dataProgress = typeof dataProgress !== 'undefined' ? dataProgress : true;
	dataSeek = typeof dataSeek !== 'undefined' ? dataSeek : true;
	dataBounce = typeof dataBounce !== 'undefined' ? dataBounce : false;
	fullScreen = typeof fullScreen !== 'undefined' ? fullScreen : true;
	scriptUrl = typeof scriptUrl !== 'undefined' ? scriptUrl : 'modules/vimeo.ga.js/vimeo.ga.js';
	
	//Init counter and script loaded switch
	var vimeoScriptLoaded = false;
	var id = 0;
	
    for (var e = document.getElementsByTagName('iframe'), x = e.length; x--;) {
		if (/player.vimeo.com\/video/.test(e[x].src)) {
			if (modUrl && !(/\w?api=1/.test(e[x].src))) {
				id++;
				var pos = e[x].src.indexOf("?");
				var api = 'api=1&';
				if (pos < 0) {
					var newSrc = e[x].src.concat('?' + api);
				} else {
					pos++;
					var newSrc = [e[x].src.slice(0, pos), api, e[x].src.slice(pos)].join('');
				}
				$(e[x]).attr('src', newSrc + '&player_id=vimeo-player-' + id);
				$(e[x]).attr('id', 'vimeo-player-' + id);
				
				
			}
			
			if (dataProgress) {
				$(e[x]).attr('dataProgress', true);
			} else {
				$(e[x]).attr('dataProgress', false);
			}
			
			if (dataSeek) {
				$(e[x]).attr('dataSeek', true);
			} else {
				$(e[x]).attr('dataSeek', false);
			}
			
			if (dataBounce) {
				$(e[x]).attr('dataBounce', true);
			} else {
				$(e[x]).attr('dataBounce', false);
			}
			
			if (fullScreen) {
				if (typeof $(e[x]).attr('webkitallowfullscreen') === typeof undefined) {
					$(e[x]).attr('webkitallowfullscreen', '');
				}
				if (typeof $(e[x]).attr('mozallowfullscreen') === typeof undefined) {
					$(e[x]).attr('mozallowfullscreen', '');
				}
				if (typeof $(e[x]).attr('allowfullscreen') === typeof undefined) {
					$(e[x]).attr('allowfullscreen', '');
				}
			}
	
	
			if (!vimeoScriptLoaded) {
				var vimeoScriptLoaded = true;
				$.getScript(scriptUrl);
			} 
			
		}
    }
}

