// Grab battery info elements
const chargeStat = document.querySelector('#battery .stat');
const chargeLevel = document.querySelector('#battery .level');
const chargeBar = document.querySelector('#battery .bar');

// Grab RoboHash image container
const roboImage = document.querySelector('#roboImage');

/**
 * Updates the battery info and robo image
 */
function updateBatStat(battery) {
    console.log(battery);

    // Charging status
    chargeStat.textContent = battery.charging ? "Charging..." : "Not charging";

    // Charge level
    const percent = Math.round(battery.level * 100);
    chargeLevel.textContent = percent + "%";
    chargeBar.value = percent;

    // Update robohash image based on battery percentage
    roboImage.src = `https://robohash.org/${percent}.png`;
    roboImage.alt = `Robo image for ${percent}% battery`;
}

// Get battery data
navigator.getBattery().then(battery => {
    updateBatStat(battery);

    battery.addEventListener("chargingchange", () => updateBatStat(battery));
    battery.addEventListener("levelchange", () => updateBatStat(battery));
});
