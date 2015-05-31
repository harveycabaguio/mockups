/*
 * if open {
 *   true: check if the same icon was clicked {
 *     true: close popover
 *     false: switch popover content to that icon's
 *   }
 *   false: move popover content to that one and open popover
 * }
 */

function togglePopover() {
  'use strict';
  if (document.getElementById('right-popover').style.opacity === '0') {
    document.getElementById('right-popover').style.animationName = 'fadeInDown';
    document.getElementById('right-popover').style.animationDuration = '0.15s';
    document.getElementById('right-popover').style.opacity = '1.0';
  } else {
    document.getElementById('right-popover').style.animationName = 'fadeOutUp';
    document.getElementById('right-popover').style.animationDuration = '0.15s';
    document.getElementById('right-popover').style.opacity = '0';
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
