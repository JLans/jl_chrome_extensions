chrome.browserAction.onClicked.addListener(function(activeTab){
	var newURL = "https://udel.idm.oclc.org/login?url="+activeTab.url;
	chrome.tabs.update({ url: newURL });

});