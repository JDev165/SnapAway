window.addEventListener('load', function(){
	const config = {childList: true}; // errors if we don't pr ovide at least one option
	//const ytSkipButton = document.querySelector(".ytp-ad-skip-button");
	const ytVideoAdContainer = document.querySelector(".video-ads.ytp-ad-module");
	const observer = new MutationObserver(function(mutations){
		mutations.forEach(function(mutation){
			console.log("Button: " + document.querySelector(".ytp-ad-skip-button"))	
			if ( document.querySelector(".ytp-ad-skip-button") ){
				console.log("Found skip button");
				document.querySelector(".ytp-ad-skip-button").click();
			}
			else{
				console.log("Button not found.");
			}
		});
	});

	if ( ytVideoAdContainer ){
		observer.observe(ytVideoAdContainer, config);
	}
	else{
		observer.disconnect();
	}	
});

