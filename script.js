const tabButtons = document.querySelectorAll("#nav-list button");

function changeTimeframe(button) {
    tabButtons.forEach(btn => btn.classList.remove("active-tab"));
    button.classList.add("active-tab");
}

tabButtons.forEach(button => {
    button.addEventListener("click", (e) => changeTimeframe(e.currentTarget));
});