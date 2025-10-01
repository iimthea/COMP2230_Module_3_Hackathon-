
document.addEventListener("DOMContentLoaded", (event) => {
    const title = document.getElementById("to-do");
    title.textContent = "To-Do List";

    const afternoonSection = document.getElementById("Afternoon");
    const afternoonHeading = document.createElement("h2");
    afternoonHeading.textContent = "Afternoon Tasks";
    
    const afternoonList = document.getElementById("afternoon-list");
    const taskContent = document.getElementById("task");
    afternoonSection.insertBefore(afternoonHeading, afternoonList);

    const taskButton = document.createElement("button");
    taskButton.textContent = "Add Task";
    afternoonSection.appendChild(taskButton);
    taskButton.addEventListener("click", () => {
        const newTask = document.createElement("li");
        newTask.textContent = taskContent.value;
        afternoonList.appendChild(newTask);
    })

    const clearButton = document.getElementById("Clear");
    clearButton.style.display = "block";
    clearButton.addEventListener("click", () => {
        while (afternoonList.firstChild) {
            afternoonList.removeChild(afternoonList.firstChild);
        }
    });
});
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
