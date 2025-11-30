//--------------------------------------------------
// CONFIG — CHANGE THIS NUMBER TO ANY # OF DAYS
//--------------------------------------------------
const NUMBER_OF_DAYS = 25;
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
