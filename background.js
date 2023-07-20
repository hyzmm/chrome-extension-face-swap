chrome.runtime.onInstalled.addListener(async () => {
    console.log(chrome.contextMenus.create)
    chrome.contextMenus.create({
        id: "face-swap",
        title: "Face Swap", contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
    const url = new URL(item.srcUrl);
    chrome.tabs.create({ url: url.href, index: tab.index + 1 });
    chrome.action.openPopup();
});