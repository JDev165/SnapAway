chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if ( request.message == "skipped-notification" ){
		
		const notificationOptions = {
			type: 'basic',
			iconUrl: 'images/hands-ok-48.png',
			title: 'Ad Skipped',
			message: 'Wondering what happened there? The ad was skipped!'
		}
		
		chrome.notifications.create('skipped-notifiction', notificationOptions);
	}
});