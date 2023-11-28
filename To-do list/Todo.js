// alert("I got click");

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

 function addTodo(){

    if (todoInput.value === "") {
        alert("please fill the input bar");
    }else
    {
        let li = document.createElement("li");
        li.innerHTML = todoInput.value
        todoList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
        todoInput.value = "";

        todoList.addEventListener("click", function(e) {
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
            }else {
                console.log("responed");
            }
        }, false);
 };