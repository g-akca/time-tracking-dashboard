const tabButtons = document.querySelectorAll("#nav-list button");
const cards = document.querySelectorAll(".card-section");

let data = [];

async function loadData() {
    const response = await fetch("data.json");
    data = await response.json();
}

function updateUI(timeframe) {
    cards.forEach((card, index) => {
        const current = data[index].timeframes[timeframe].current;
        const previous = data[index].timeframes[timeframe].previous;

        const durationEl = card.querySelector(".task-duration");
        const lastEl = card.querySelector(".task-last");
        durationEl.textContent = `${current}hrs`;

        if (timeframe == "daily") {
            lastEl.textContent = `Yesterday - ${previous}hrs`;
        }
        else if (timeframe == "weekly") {
            lastEl.textContent = `Last Week - ${previous}hrs`;
        }
        else {
            lastEl.textContent = `Last Month - ${previous}hrs`;
        }
    });
}

function changeTimeframe(button) {
    tabButtons.forEach(btn => btn.classList.remove("active-tab"));
    button.classList.add("active-tab");

    const timeframe = button.id;
    updateUI(timeframe);
}

loadData();

tabButtons.forEach(button => {
    button.addEventListener("click", (e) => changeTimeframe(e.currentTarget));
});