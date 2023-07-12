document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        chrome.tabs.query({ url: 'https://*.google.com/*' }, function(tabs) {
            if(tabs.length > 0) {
                const tab = tabs[0];
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['scripts/content.js']
                }, () => alert('Complete'));
            } else {
                alert('Wrong tab')
            }
        });
    });
});