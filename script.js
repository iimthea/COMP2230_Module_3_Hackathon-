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