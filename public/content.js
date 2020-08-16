// 接收来自chrome.tabs.sendMessage或runtime.sendMessage的消息
// eslint-disable-next-line
chrome.runtime.onMessage.addListener(function(message, sender) {
  try {
    const { needHiddenHotList } = message || {};
    if (needHiddenHotList) {
      const hotList = document.querySelector("#container #content_right");
      hotList.style.display = "none";
    }
  } catch (err) {
    console.error(err);
  }
});
