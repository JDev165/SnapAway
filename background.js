chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if ( request.message == "triggerNotification" ){
		const notifOptions = {
			type: 'basic',
			iconUrl: 'images/hands-ok-48.png',
			title: 'Ad Skipped',
			message: 'Wondered what happened there? Ad was skipped!'
		}

		chrome.notifications.create('skipped', notifOptions);
	}
});