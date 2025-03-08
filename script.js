function addTask() {
    const dateInput = document.getElementById('taskDate').value;
    const timeInput = document.getElementById('taskTime').value;
    const taskInput = document.getElementById('taskDescription').value;

    if (dateInput && timeInput && taskInput) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.textContent = `${dateInput} ${timeInput} - ${taskInput}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        
        // Clear input fields after adding the task
        document.getElementById('taskDate').value = '';
        document.getElementById('taskTime').value = '';
        document.getElementById('taskDescription').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}