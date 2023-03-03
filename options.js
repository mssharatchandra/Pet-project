const nameInput = document.getElementById("name-input");
const btn = document.getElementById("save-btn");
const timeInput = document.getElementById("notification-time");

btn.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  chrome.storage.sync.set({
    name,
    notificationTime,
  });
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  console.log(res);
  nameInput.value = res.name ?? "enter ur name in options";
  timeInput.value = res.notificationTime ?? 20;
});
