function inIframe() {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}

setTimeout(() => {
	document.body.style.margin = '0';
	document.body.style.padding = '0';

	if (document.getElementById('left-sidebar')) {
		document.getElementById('left-sidebar').remove();
	}
	if (document.getElementById('masthead')) {
		document.getElementById('masthead').remove();
	}
	if (document.getElementsByClassName('durga-back-to-top').length) {
		document.getElementsByClassName('durga-back-to-top')[0].remove();
	}
	if (document.getElementsByClassName('wp-dark-mode-switcher').length) {
		document.getElementsByClassName('wp-dark-mode-switcher')[0].remove();
	}
	
	if (document.getElementById('UnMutePlayer')) {
                document.getElementById('UnMutePlayer').remove();
        }

	//
	if (document.getElementById('wp_chat')) {
		document.getElementById('wp_chat').remove();
	}
	if (document.getElementById('content-sidebar')) {
		document.getElementById('content-sidebar').remove();
	}
	if (document.getElementById('gamecard')) {
		document.getElementById('gamecard').remove();
	}
	if (document.getElementsByClassName('ads-placment').length) {
		document.getElementsByClassName('ads-placment')[0].remove();
	}
	if (document.getElementById('top-hsead-player')) {
		document.getElementById('top-hsead-player').parentElement.remove();
	}

	if (document.getElementsByTagName('header').length) {
		document.getElementsByTagName('header')[0].remove();
	}
	if (document.getElementsByTagName('footer').length) {
		document.getElementsByTagName('footer')[0].remove();
	}
	if (document.getElementsByClassName('row').length) {
		document.getElementsByClassName('row')[document.getElementsByClassName('row').length - 1].remove();
	}

	document.documentElement.style.overflow = 'hidden'; // firefox, chrome
	document.body.scroll = "no"; // ie only

	// Click to Load Video
	if (document.getElementsByClassName('player-poster clickable').length) {
		document.getElementsByClassName('player-poster clickable')[0].click();
	}

	if (document.getElementsByTagName('video').length) {
		let video = document.getElementsByTagName('video')[0];
		video.play();
		video.muted = false;
		video.volume = 1.0;
		video.style.position = 'fixed';
		video.style.top = '0';
		video.style.left = '0';
		video.style.margin = '0';
		video.style.padding = '0';
		video.style.minHeight = '100vh';
		video.style.minWidth = '100vw';
		// video.style.zIndex = '999999';

		let parent = video.parentElement;
		while (parent.parentElement) {
			parent.style.position = 'fixed';
			parent.style.top = '0';
			parent.style.left = '0';
			parent.style.margin = '0';
			parent.style.padding = '0';
			parent.style.minHeight = '100vh';
			parent.style.minWidth = '100vw';
			parent = parent.parentElement;
		}
	} else {
		
	}

	var playChecker = setInterval(() => {
		if (document.getElementsByTagName('video').length) {
			let video = document.getElementsByTagName('video')[0];
			if (!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)) {
				//
			} else {
				window.location.reload();
			}
		}
	}, 10000)

	if (!inIframe() && document.getElementsByClassName('entry-content').length) {
		if (document.getElementsByClassName('entry-content')[0].getElementsByTagName('iframe').length) {
			let targetFrame = document.getElementsByClassName('entry-content')[0].getElementsByTagName('iframe')[0];
			targetFrame.style.position = 'fixed';
			targetFrame.style.top = '0';
			targetFrame.style.left = '0';
			targetFrame.style.margin = '0';
			targetFrame.style.padding = '0';
			targetFrame.style.minHeight = '100vh';
			targetFrame.style.minWidth = '100vw';
		}
	}

	if (inIframe()) {
		if (document.getElementsByTagName('iframe').length) {
			let targetF1 = document.getElementsByTagName('iframe')[0];
			targetF1.style.position = 'fixed';
			targetF1.style.top = '0';
			targetF1.style.left = '0';
			targetF1.style.margin = '0';
			targetF1.style.padding = '0';
			targetF1.style.minHeight = '100vh';
			targetF1.style.minWidth = '100vw';
		}
	}

}, 10000);
