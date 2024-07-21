console.log("Redirect Called");

chrome.idle.queryState(20, (state: chrome.idle.IdleState) => {
  if (state === "active") {
    console.log("State is active");
  }
  if (state === "idle") {
    console.log("State is idle");
  }
});

chrome.idle.onStateChanged.addListener((state: chrome.idle.IdleState) => {
  if (state === "active") {
    console.log("State is active: Event Called");
  }
  if (state === "idle") {
    console.log("State is idle: Event Called");
    //redirect current page to url
    chrome.tabs.update({ url: "https://gopoco.org/kiosk/?kiosk=true" });
  }
});
