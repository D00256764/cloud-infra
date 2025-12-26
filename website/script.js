// Dynamically updates the clock every second
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
}

// Updates the footer year automatically
function updateYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
}

// Initialize on page load
updateTime();
updateYear();

// Update every second
setInterval(updateTime, 1000);
