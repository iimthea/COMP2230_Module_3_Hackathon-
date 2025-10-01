document.addEventListener("DOMContentLoaded", function () {
    const nightSection = document.getElementById("Night");
    const clearButton = document.getElementById("Clear");

    clearButton.addEventListener("click", function () {
        nightSection.innerHTML = `
            <h2>Night Routine </h2>
            <ul>
                <li>Review your day and journal key wins</li>
                <li>Prep tasks for tomorrow</li>
                <li>Unplug from screens 30 mins before bed</li>
                <li>Stretch or meditate for 5–10 minutes</li>
                <li>Set your alarm and wind down</li>
            </ul>
        `;
    });
});

