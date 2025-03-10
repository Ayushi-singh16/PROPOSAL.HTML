document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput").value;
    const reminderInput = document.getElementById("reminderInput").value;
    
    if (taskInput === "") {
        alert("Please enter a task.");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.textContent = `${taskInput} - Reminder: ${reminderInput}`;
    taskList.appendChild(listItem);
    
    const reminderTime = new Date(reminderInput).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = reminderTime - currentTime;
    
    if (timeDifference > 0) {
        setTimeout(() => {
            alert(`Reminder: ${taskInput}`);
            new Notification("Study Buddy Reminder", { body: `Time for: ${taskInput}` });
        }, timeDifference);
    }
    
    document.getElementById("taskInput").value = "";
    document.getElementById("reminderInput").value = "";
});

// Request permission for notifications
document.addEventListener("DOMContentLoaded", () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
});
