//--------------------------------------------------
// CONFIG — CHANGE THIS NUMBER TO ANY # OF DAYS
//--------------------------------------------------
const NUMBER_OF_DAYS = 3;
// Example: set to 12 for 12 days, or 30 for 30 days
//--------------------------------------------------


// Generate the calendar boxes
const calendar = document.getElementById("calendar");

for (let day = 1; day <= NUMBER_OF_DAYS; day++) {
    const box = document.createElement("div");
    box.className = "day-box";
    box.innerText = day;
    box.onclick = () => {
        window.location.href = `days/day${day}.html`;
    };
    calendar.appendChild(box);
}

// lock dates (YYYY-MM-DD)
const unlockDates = {
    1: "2025-12-01",
    2: "2025-12-02",
    3: "2025-12-03"
};
//--------------------------------------------------

const today = new Date();

for (let day = 1; day <= NUMBER_OF_DAYS; day++) {
    const box = document.createElement("div");
    box.className = "day-box";

    const unlockDate = new Date(unlockDates[day]);

    if (today >= unlockDate) {
        // unlocked
        box.innerText = day;
        box.onclick = () => window.location.href = `days/day${day}.html`;
    } else {
        // locked
        box.innerHTML = `<span style="opacity:0.4;">${day} 🔒</span>`;
        box.style.opacity = "0.4";
        box.style.cursor = "not-allowed";
    }

    calendar.appendChild(box);
}


// Snowflake generator
function createSnowflake() {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 3 + Math.random() * 5 + "s";

    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 8000);
}

// Make snow fall every 150 ms
setInterval(createSnowflake, 150);
