// Mutable variables for storing task data
let tasks = []; 
let taskIdCounter = 0; 

const morningInput = document.getElementById("morning-input");
const morningAddBtn = document.getElementById("morning-add-btn");
const morningTaskList = document.getElementById("morning-task-list");
const clearBtn = document.getElementById("Clear"); 

// Adds new task to list
const addTask = () => {
    let taskText = morningInput.value.trim();   
    
    if(taskText === ''){
        alert("Please enter a task!");
        return;
    }
    
    // Create task object with different data types
    let task = {
        id: taskIdCounter++, 
        text: taskText,     
        completed: false    
    };
    
    tasks.push(task);
    
    // Call function to update display
    displayTasks();
    // Clear input field
    morningInput.value = ''; 
};

// Displays all tasks on the page using loops
const displayTasks = () => {
    morningTaskList.innerHTML = ''; 
    
    if(tasks.length === 0){
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = "No tasks yet. Add one above!";
        emptyMessage.style.color = "#999";
        morningTaskList.appendChild(emptyMessage);  
        return;
    }
    
    // Loop through tasks array
    tasks.forEach((task, index) => {
        // Create list item element 
        const li = document.createElement('li'); 
        
        // Add class if completed
        if(task.completed === true){
            li.classList.add("completed"); 
        }
        
        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${task.text}`; 
        
        // Create delete button
        const deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn"; 
        
        // Event listener - delete button click
        deleteBtn.addEventListener("click", (event) => {  
            event.stopPropagation();
            deleteTask(index);
        });
        
        // Add elements to list item
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        
        // Event listener
        li.addEventListener('click', () => {
            toggleTask(index);
        });
        
        morningTaskList.appendChild(li);
    });
};
 
const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    displayTasks();
};

//  Clears all tasks from the list 
const clearAllTasks = () => { 
    if(tasks.length === 0){
        alert("No tasks to clear!"); 
        return;
    }
    
    const shouldClear = confirm("Delete all morning tasks?"); 
    
    if(shouldClear){
        tasks = []; 
        taskIdCounter = 0; 
        displayTasks();
    }
};

// Button click event
morningAddBtn.addEventListener("click", addTask);

morningInput.addEventListener("keypress", (event) => { 
    if(event.key === "Enter"){ 
        addTask();
    } 
});

// Clear button click event
clearBtn.addEventListener("click", clearAllTasks); 

displayTasks(); 
console.log("Morning To-Do List!");  
