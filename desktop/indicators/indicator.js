/*
 * if open {
 *   true: check if the same icon was clicked {
 *     true: close popover
 *     false: switch popover content to that icon's
 *   }
 *   false: move popover content to that one and open popover
 * }
 */

lastIndicator = null;

function togglePopover() {
  var popover = document.getElementById('right-popover')
  // if popover not open then animate and show the content of clicked indicator
  if (popover.style.opacity == 0) {
    switchContent(this.id, popover);
    popover.style.animationName = 'fadeInDown';
    popover.style.animationDuration = '0.15s';
    popover.style.opacity = '1.0';
  } else {
    // if I press the same indicator as last time, close the popover
    if (lastIndicator.localeCompare(this.id) == '0') {
      popover.style.animationName = 'fadeOutUp';
      popover.style.animationDuration = '0.15s';
      popover.style.opacity = '0';
      lastIndicator = this.id;
    } else {
      switchContent(this.id, popover);
    }
  }
}

function switchContent(content, popover) {
  switch (content) {
  case "network":
    //document.getElementById('audio-content').style.display = 'none';
    document.getElementById('network-content').style.display = 'block';
    document.getElementById('power-content').style.display = 'none';
    //document.getElementById('session-content').style.display = 'none';
    popover.className = "popover network top";
    break;
  case "power":
    //document.getElementById('audio-content').style.display = 'none';
    document.getElementById('network-content').style.display = 'none';
    document.getElementById('power-content').style.display = 'block';
    //document.getElementById('session-content').style.display = 'none';
    popover.className = "popover power top";
    break;
  }
  lastIndicator = content;
}

function listen() {
  'use strict';
  var audio = document.getElementById('audio'), network = document.getElementById('network'), power = document.getElementById('power'), session = document.getElementById('session');

  if (audio && network && power && session) {
    audio.addEventListener("click", togglePopover);
    network.addEventListener("click", togglePopover);
    power.addEventListener("click", togglePopover);
    session.addEventListener("click", togglePopover);
  }
}

// for toggling the wifi in the network indicator

function toggleWifi() {
  'use strict';
  if (document.getElementById('wifi').checked) {
    document.getElementById('network-list').style.display = 'block';
    document.getElementById('new-network').style.display = 'block';
  } else {
    document.getElementById('network-list').style.display = 'none';
    document.getElementById('new-network').style.display = 'none';
  }
}
