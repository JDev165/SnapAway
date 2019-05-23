window.addEventListener('load', function(){
	const config = {childList: true}; // errors if we don't provide at least one option
	const ytVideoAdContainer = document.querySelector(".video-ads.ytp-ad-module");
	const observer = new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			if ( document.querySelector(".ytp-ad-skip-button") ){
				document.querySelector(".ytp-ad-skip-button").click();
			}
		});
	});

	// if main ads container found, initiate observer else disconnect
	if ( ytVideoAdContainer ){
		observer.observe(ytVideoAdContainer, config);
	}
	else{
		observer.disconnect();
	}	
});

