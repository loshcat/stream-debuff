// Init
console.log('BG running');

var tabOn = [];

browser.browserAction.onClicked.addListener(clickRun);

chrome.runtime.onMessage.addListener(refreshRun);

// browser.tabs.query(
//   {currentWindow: true, active : true},
//   function(tabArray){console.log(tabArray);}
// )

function removeItemAll(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function clickRun(tab) {
  console.log(tab);
  if (tabOn.includes(tab.id)) {
    browser.tabs.sendMessage(tab.id, 'VidDeActive');
    tabOn = removeItemAll(tabOn, tab.id);
  }
  else {
    browser.tabs.sendMessage(tab.id, 'VidReActive');
    tabOn.push(tab.id);
  }
  console.log(tabOn);
}

function refreshRun(a, b, c) {
  try {
    // console.log('a ', a);
    // console.log('b ', b);
    // console.log('c ', c);
    console.log(tabOn.includes(b.tab.id), a == 'checktoactive');
    if (tabOn.includes(b.tab.id) && a == 'checktoactive') {
      browser.tabs.sendMessage(b.tab.id, 'VidReActive');
    }
    if (a == 'reload') {
      browser.tabs.sendMessage(b.tab.id, 'reload');
    }
    if (a == 'escreload') {
      browser.tabs.sendMessage(b.tab.id, 'VidDeActive');
      tabOn = removeItemAll(tabOn, b.tab.id);
    }

    console.log(tabOn);

  } catch (e) { console.log(e) }
}


chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "title": 'ReVid"',
    "contexts": ["all"],
    "id": "myContextMenuId"
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info, tab);
})
