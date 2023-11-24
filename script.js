//Selection
let inputElement = document.querySelector('#input-box');
let taskList = document.querySelector('#items');
let completeTask = document.querySelector('#doneList');
let form = document.querySelector('form');

// functions
let createTask = function(task){
    let Tasklist = document.createElement('li');
    let checkBox = document.createElement('input');
    let taskTitle = document.createElement('span');

    checkBox.type = 'checkbox';
    taskTitle.innerText = task;

    Tasklist.appendChild(checkBox);
    Tasklist.appendChild(taskTitle);

    return Tasklist;
}

let addTask = function(event){
    if(inputElement.value){
        event.preventDefault();

        let listItem = createTask(inputElement.value);
        taskList.appendChild(listItem);
        inputElement.value = "";
    
        //checked 
        checkComplete(listItem, completeTaskFunction);
    }else{
        event.preventDefault();
        console.log("Input filed is empty");
    }
}

let completeTaskFunction = function(){
    let listItem = this.parentNode;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    listItem.appendChild(deleteButton);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeTask.appendChild(listItem);
    completedTaskCeheck(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let checkComplete = function(listItem, CheckBtnClickToCompleteTask){
    let clickedCheckBox = listItem.querySelector('input[type="checkbox"]');
    clickedCheckBox.onchange = CheckBtnClickToCompleteTask;
}

let completedTaskCeheck = function(listItem, deleteTask){
    let deleteBtn = listItem.querySelector('button');
    deleteBtn.onclick = deleteTask;
    console.log(deleteBtn);
}

form.addEventListener('submit', addTask);

for(let i = 0; i > taskList.children.length; i++){
    checkComplete(taskList.children[i], completeTaskFunction);
}

for(let i = 0; i > completeTask.children.length; i++){
    completedTaskCeheck(completeTask.children[i], deleteTask);
}








