  // popup.js
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('my-button');
    button.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {action: 'show_dialog'});
      });
    });
  });
  // popup.js
chrome.storage.local.get('enabled', function(items) {
    var enabled = items.enabled;
    var button = document.getElementById('my-button');
    if (enabled) {
      button.innerText = 'Disable';
    } else {
      button.innerText = 'Enable';
    }
    button.addEventListener('click', function() {
      enabled = !enabled;
      chrome.storage.local.set({enabled: enabled}, function() {
        if (enabled) {
          button.innerText = 'Disable';
        } else {
          button.innerText = 'Enable';
        }
      });
    });
  });
  