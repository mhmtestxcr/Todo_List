const filter = document.getElementById("filter");
const filter1 = document.getElementById("filter1");
const filter2 = document.getElementById("filter2");




eventListeners();
function eventListeners(){

    filter.addEventListener("click",addContentTodo);
    filter1.addEventListener("click",addContentTodo);
    filter2.addEventListener("click",addContentTodo);


}
