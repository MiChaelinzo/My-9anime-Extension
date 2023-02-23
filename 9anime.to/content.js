// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'show_dialog') {
      showDialog();
    }
  });
  
  function showDialog() {
    var dialog = document.createElement('div');
    dialog.classList.add('dialog');
    dialog.innerHTML = '<h2>My 9anime Extension</h2><p>This is a sample dialog box.</p>';
    document.body.appendChild(dialog);
  }
  // content.js
chrome.storage.local.get('enabled', function(items) {
    var enabled = items.enabled;
    if (enabled) {
      enableFeatures();
    }
  });
  
  function enableFeatures() {
    // Add your custom features here
    // content.js
chrome.storage.local.get('enabled', function(items) {
    var enabled = items.enabled;
    if (enabled) {
      enableFeatures();
    }
  });
  
  function enableFeatures() {
    // Add your custom features here
    // For example, you could add a keyboard shortcut to play/pause the video:
    document.addEventListener('keydown', function(event) {
      if (event.code == 'Space') {
        var video = document.querySelector('video');
        if (video) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          event.preventDefault();
        }
      }
    });
    
    // You could also add a feature to skip the intro or credits of an episode:
    var introDuration = 60; // Set the duration of the intro in seconds
    var creditsDuration = 30; // Set the duration of the credits in seconds
    
    var video = document.querySelector('video');
    if (video) {
      var timerId = setInterval(function() {
        if (video.currentTime < introDuration) {
          video.currentTime = introDuration;
        } else if (video.currentTime > video.duration - creditsDuration) {
          clearInterval(timerId);
          video.currentTime = video.duration - creditsDuration;
        }
      }, 1000);
    }
  }
  
  }
  
  