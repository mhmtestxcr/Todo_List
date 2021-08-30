const category      = document.getElementById("categ");
const ınputcateg    = document.getElementById("input-categ");
const addınput      = document.getElementById("addınput");





eventListeners();

function eventListeners(){
    addınput.addEventListener("click",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    category.addEventListener("click",deleteTodo);
    ınputcateg.addEventListener("keyup",adddkeyup);
    
}

 

function adddkeyup(event){
    if(event.keyCode === 13) addınput.click();
}


function deleteTodo(e){

    if(e.target.className === "bi bi-x-circle"){
        e.target.parentElement.remove();
        deleteFromStorage(e.target.parentElement.textContent);
    }
}


function deleteFromStorage(deleteTodo){

    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(index > -1){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}




function loadAllTodosToUI(){
    
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){

        addTodoToUI(todo);
    })
}

function addTodo(e){

    const NewTodo  = ınputcateg.value.trim();


    addTodoToUI(NewTodo);
    addTodoToStorage(NewTodo)

    e.preventDefault();
    
}

function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}


function addTodoToStorage(NewTodo){

    let todos = getTodosFromStorage();

    todos.push(NewTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodoToUI(NewTodo){



    const listItem  = document.createElement("li");
    listItem.innerHTML  =  " <i class='bi bi-x-circle'></i><i class='bi bi-heart-fill'></i>";
    listItem.className  = " list-group-item list-group-item-action "
    listItem.appendChild(document.createTextNode(NewTodo));
    
    category.appendChild(listItem);
    
    ınputcateg.value = "";
    
    console.log(listItem);



}

