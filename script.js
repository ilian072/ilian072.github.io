//--------------------------------------------------
// CONFIG
//--------------------------------------------------
const NUMBER_OF_DAYS = 3;

// Unlock dates for each day
const unlockDates = {
    1: "2025-12-01",
    2: "2025-12-02",
    3: "2025-12-03"
};

// Unique box backgrounds for each day
const boxImages = {
    1: "assets/box1.png",
    2: "assets/box2.png",
    3: "assets/box3.png"
};
//--------------------------------------------------

// Build calendar
const calendar = document.getElementById("calendar");
const today = new Date();

for (let day = 1; day <= NUMBER_OF_DAYS; day++) {

    const box = document.createElement("div");
    box.className = "day-box";
    box.style.backgroundImage = `url('${boxImages[day]}')`;

    const unlockDate = new Date(unlockDates[day]);

    if (today >= unlockDate) {
        // UNLOCKED
        box.innerHTML = day;
        box.onclick = () => window.location.href = `days/day${day}.html`;

    } else {
        // LOCKED
        box.classList.add("locked");
        box.innerHTML = `${day} 🔒`;

        box.onclick = () => {
            alert(`This day unlocks on ${unlockDates[day]}!`);
        };
    }

    calendar.appendChild(box);
}


//----------------------------------------------
// Snowfall engine
//----------------------------------------------
function createSnowflake() {
    const flake = document.createElement("div");
    flake.innerHTML = "❄";
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.animationDuration = (4 + Math.random() * 6) + "s";
    flake.style.fontSize = (10 + Math.random() * 10) + "px";

    document.getElementById("snow").appendChild(flake);

    setTimeout(() => flake.remove(), 12000);
}

// Make snow fall continuously
setInterval(createSnowflake, 150);

