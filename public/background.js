chrome.runtime.onInstalled.addListener(async () => {
    console.log("Face swap installed")
    chrome.contextMenus.create({
        id: "face-swap",
        title: "Face Swap", contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
    const url = new URL(item.srcUrl);
    chrome.action.setPopup({
        popup: `index.html?target=${url.href}`
    });
});