// tüm Elementleri seçme
const ınputcategsecond   = document.getElementById("input-categ-second");
const maintodolistcontent = document.getElementById("maintodolistcontent");
const addbody = document.getElementById("add-body");





eventListeners();
function eventListeners(){

    addbody.addEventListener("click",addContentTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosContentToUI);
    maintodolistcontent.addEventListener("click",deleteContentTodo); 

}



function deleteContentTodo(e){

    if(e.target.className === "bi bi-x-circle delete"){
        e.target.parentElement.remove();
        deleteFromContentStorage(e.target.parentElement.textContent);
    }
}


function deleteFromContentStorage(deleteTodo){

    let dones = getTodosFromStorage();

    dones.forEach(function(todo,index){
        if(index > -1){
            dones.splice(index,1);
        }
    });

    localStorage.setItem("dones",JSON.stringify(dones));
}


function loadAllTodosContentToUI(){

    let dones =  getTodosContentFromStorage();

    dones.forEach(function(todo){

        addContentTodoUI(todo);
    })
}

function addContentTodo(e){


    const NewTodo1  = ınputcategsecond.value;
    
    
    addContentTodoUI(NewTodo1);
    addContentTodoStorage(NewTodo1);

    



    e.preventDefault();
}

function getTodosContentFromStorage(){
    let dones;

    if(localStorage.getItem("dones") === null){
        dones = [];
    }
    else{
        dones = JSON.parse(localStorage.getItem("dones"));
    }
    return dones;

}

function addContentTodoStorage(NewTodo1){

    let dones = getTodosContentFromStorage();
    dones.push(NewTodo1);

    localStorage.setItem("dones",JSON.stringify(dones));
}

function addContentTodoUI(NewTodo1){
    
    
                        //   <li class="list-group-item list-group-item-action">item1 
                        //     <i id="filter" class="bi bi-heart-fill"></i> 
                        //     <i id="delete" class="bi bi-x-circle"></i></li>

   const listItemContent = document.createElement("li");
   listItemContent.innerHTML  =  "<i class='bi bi-x-circle delete'></i> <i class='bi bi-heart-fill filter'></i>";
   listItemContent.className  = " list-group-item list-group-item-action";
   listItemContent.appendChild(document.createTextNode(NewTodo1));
   
   maintodolistcontent.appendChild(listItemContent);
   
 
   
   console.log(listItemContent);


}