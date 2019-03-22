// document.addEventListener("DOMContentLoaded", function () {
//     alert('background test');
// })

// document.getElementById("displayText").addEventListener("click", toggle);

// chrome.browserAction.setBadgeText({text: 'new'});
// chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="rgba(199,237,204,0.8)"'
    })
})
 
// chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="rgba(199,237,204,1)"'
// })

// page action
// chrome.runtime.onInstalled.addListener(function () {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([
//             {
//                 conditions: [
//                     // 只有打开github才显示pageAction
//                     new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'github'}})
//                 ],
//                 actions: [new chrome.declarativeContent.ShowPageAction()]
//             }
//         ]);
//     });
// });

// context menu 右键菜单
chrome.contextMenus.create({
    title: "测试右键菜单",
    id: 'text_context_menu',
    contexts: ["all"]
})
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "text_context_menu") {
        // 桌面通知 ][[[[[[[未测试通过]][
        // chrome.notifications.create(null, {
        //     type: 'basic',
        //     iconUrl: 'img/icon.ong',
        //     title: '只是标题',
        //     message: '您刚才点击了自定义邮件菜单'
        // })
        alert("您点击了右键菜单!")
    }
})

// 添加划词搜索
// chrome.contextMenus.create({
//     title: "使用baidu搜诉",
//     id: 'baiduSearch_context_menu',
//     contexts: ["selection"] // 只有选中的时候才会出现此邮件菜单
// });
// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//     if (info.menuItemId === "baiduSearch_context_menu") {
//         chrome.tabs.create({
//             url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)
//         });
//     }
// })