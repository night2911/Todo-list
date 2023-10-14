const addBtn = document.getElementById('add-btn');
const TodoInput = document.getElementById('todo-input')
const todoListHTML = document.getElementById('todo-list')

// take the list from todo from local storage and transfer to JS
//  if no todo-list before then add with blank ( [] )
let todoList = JSON.parse(localStorage.getItem('todo-list')) || [];



// ham xu ly them todo vao local storage
function handleAddTodo(){
    let text = TodoInput.value;
    
    // add todo in the first todolist
    todoList.push(text);

    // save todolist in local storage
    localStorage.setItem('todo-list',JSON.stringify((todoList)));
    
    // khi them thanh cong render lai ra danh sach todo
    renderHTML();
}

// ham in ra man hinh danh sach todo
function renderHTML(){
    let htmls = '';
    for(let i=0; i < todoList.length; i++){
        htmls += "<li>" + todoList[i] + "</li>";
    }
    // inner cac phan tu html da them trong vong lap vao the ul
    todoListHTML.innerHTML = htmls;
}


// them su kien CLICK cho nut "them"
addBtn.addEventListener('click', function(event){
    console.log("elo");
    event.preventDefault();
    
    // goi ham add todo
    handleAddTodo();
})
renderHTML();