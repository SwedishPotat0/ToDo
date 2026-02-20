function addTask() {
    const taskName = document.getElementById('input').value;
    const taskDescription = document.getElementById('description').value;
    const taskColor = document.getElementById('colorPicker').value;
    if (taskName.trim() === '') {
        alert('Please enter a task name.');
        return;
    } else {
        document.getElementById('input').value = '';
        document.getElementById('description').value = '';
    }
    const taskList = document.querySelector('.tasklist');
    const taskElement = document.createElement('div');
    taskElement.textContent = taskName;
    taskElement.style.backgroundColor = taskColor;
    taskElement.dataset.description = taskDescription;
    taskElement.dataset.complete = 'false';
    taskList.appendChild(taskElement);
    taskElement.onclick = showTask;
}

function showTask() {
    const taskName = this.textContent;
    const taskDescription = this.dataset.description;

    const Dialog = document.createElement('dialog');
    Dialog.style.top = '30%';
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => Dialog.close();
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    if (this.dataset.complete === 'true') {
        completeButton.disabled = true;
    }
    completeButton.onclick = () => {
        this.style.textDecoration = 'line-through';
        this.dataset.complete = 'true';
        Dialog.close();
    };
    
    const taskNameElement = document.createElement('h2');
    taskNameElement.textContent = taskName;
    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = taskDescription;

    document.body.appendChild(Dialog);
    Dialog.appendChild(taskNameElement);
    Dialog.appendChild(taskDescriptionElement);
    Dialog.appendChild(completeButton);
    Dialog.appendChild(closeButton);
    Dialog.showModal();
}

function saveList() {
    null;
}

function loadList() {
    null;
}