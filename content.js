// ad overlay close button class: ytp-ad-overlay-close-button

window.addEventListener('load', function(){
	const config = {childList: true}; // errors if we don't provide at least one option
	const ytVideoAdContainer = document.getElementsByClassName("video-ads")[0];
	const observer = new MutationObserver(function(mutations){
		console.log(mutations);
		if( mutations.length > 0){
			if ( document.getElementsByClassName("ytp-ad-skip-button-icon")[0] && document.getElementsByClassName("ytp-ad-skip-button")[0] ){
				document.getElementsByClassName("ytp-ad-skip-button")[0].click();
				sendMessageToBackgroundScript();
				// console.log("Found button and clicked!");
			}
		}
	});

	function sendMessageToBackgroundScript(){
		const messageObj = {message: "skipped-notification"};
		chrome.runtime.sendMessage(messageObj, function(response){
			// console.log(response);
		});			
	}

		// if main ads container found, initiate observer else disconnect
	if ( ytVideoAdContainer ){
		observer.observe(ytVideoAdContainer, config);
	}
	else{
		observer.disconnect();
	}		

});

