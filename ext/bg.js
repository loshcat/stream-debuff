// Init
console.log('BG running');

var tabOn = [];
var frameOnly = false;

chrome.browserAction.onClicked.addListener(clickRun);

chrome.runtime.onMessage.addListener(refreshRun);

// chrome.tabs.query(
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
    chrome.tabs.sendMessage(tab.id, 'VidDeActive');
    tabOn = removeItemAll(tabOn, tab.id);
  }
  else {
    chrome.tabs.sendMessage(tab.id, 'VidReActive');
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
      chrome.tabs.sendMessage(b.tab.id, 'VidReActive');
    }
    if (a == 'reload') {
      chrome.tabs.sendMessage(b.tab.id, 'reload');
    }
    if (a == 'escreload') {
      chrome.tabs.sendMessage(b.tab.id, 'VidDeActive');
      tabOn = removeItemAll(tabOn, b.tab.id);
    }

    console.log(tabOn);

  } catch (e) { console.log(e) }
}


chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "title": 'Frame Only',
    "contexts": ["all"],
    "id": "myContextMenuId"
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  console.log(info, tab);
  if (frameOnly) {frameOnly = false;} else {frameOnly = true;}
  // chrome.tabs.create({
  //   url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
  // });
})
