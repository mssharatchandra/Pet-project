const timeElement = document.getElementById("time");

const nameElement = document.getElementById("name");
const popupTime = document.getElementById("pop-up-time");

// chrome.action.setBadgeBackgroundColor({ color: "#00FF00" });
// chrome.action.setBadgeText(
//   {
//     text: "TIME",
//   },
//   () => {
//     console.log("Finished setting badge text");
//   }
// );
function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    popupTime.textContent = `Time is ${time}`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `The present time is ${currentTime}`;
}

updateTimeElements();
setInterval(updateTimeElements, 1000);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "Please set your name to something in options";
  nameElement.textContent = `Your name is ${name}`;
});

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", () =>{
  chrome.storage.local.set({
    isRunning : true,
  })
})

stopButton.addEventListener("click", () =>{
  chrome.storage.local.set({
    isRunning : false,
  })
})

resetButton.addEventListener("click", () =>{
  chrome.storage.local.set({
    timer : 0,
    isRunning: false,
  })
})

