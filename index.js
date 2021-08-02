// addtolist();
// Selectors
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-ul-list");

// EventListeners
addBtn.addEventListener("click", addtolist);
todoList.addEventListener("click", deleteCheck);
// functions
function addtolist(e) {
  // prevent form from submitting
  event.preventDefault();

  // create div
  const newTodoList = document.createElement("div");
  newTodoList.classList.add("list");

  
  // create list item
  const inputList = document.createElement("li")
  inputList.classList.add("list-item");
  inputList.innerText = todoInput.value;
  newTodoList.appendChild(inputList);
  addToLocalStorage(todoInput.value);

  // today
  
  // append list to a div
  // localStorage.setItem(inputList.innerText, item1);

  // create completed and delete btn
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completeBtn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  newTodoList.append(completeBtn);


  const deletedBtn = document.createElement("button");
  deletedBtn.classList.add("deletedBtn");
  deletedBtn.innerHTML = '<i class="fas fa-trash"></i>';
  newTodoList.append(deletedBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = '<i class="far fa-edit"></i>';
  newTodoList.append(editBtn);

  // console.log(newTodoList);

  // append div to a ul
  todoList.append(newTodoList)
  // console.log(todoList);

  // clear the text in the input box
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target
  const parentElement = item.parentElement;
  if (item.classList[0] === "deletedBtn") {
  
    parentElement.remove();
    deleteFromLS(parentElement); 
  }

  if (item.classList[0] === "completeBtn") {
    parentElement.classList.toggle("line-through");
  }

  if (item.classList[0] === "editBtn") {

    todoInput.value = parentElement.innerText;

    addBtn.addEventListener('click', function () {
      parentElement.remove();

    });
    // console.log(parentElement.innerText);
    console.log(parentElement.innerText);

  }
}

function addToLocalStorage(todoElement){
  let notes = localStorage.getItem("notes");  //it will tell us how much items alreay in the local storage
  if(notes === null){
    noteslist =[];
  }
  else{
    noteslist = JSON.parse(notes);  
  }
  noteslist.push(todoElement);
  localStorage.setItem("notes", JSON.stringify(noteslist));
  console.log(noteslist);

} 
function deleteFromLS(todoElement){
  let notes = localStorage.getItem("notes");  //it will tell us how much items alreay in the local storage
  if(notes === null){
    noteslist =[];
  }
  else{
    noteslist = JSON.parse(notes);  
  }
  let grabEle = todoElement.children[0].innerText;
  // console.log(notes.indexOf(grabEle));
  noteslist.splice(noteslist.indexOf(grabEle), 1);
  localStorage.setItem("notes", JSON.stringify(noteslist));
}



function displayTodos(){
  let notes = localStorage.getItem("notes");  //it will tell us how much items alreay in the local storage
  if(notes === null){
    noteslist =[];
  }
  else{
    noteslist = JSON.parse(notes);  
  }
  noteslist.forEach(element => {
    // create div
    // console.log(element);
  const newTodoList = document.createElement("div");
  newTodoList.classList.add("list");

  
  // create list item
  const inputList = document.createElement("li")
  inputList.classList.add("list-item");
  inputList.innerText = element;
  newTodoList.appendChild(inputList);
  // addToLocalStorage(todoInput.value);

  // today
  
  // append list to a div
  // localStorage.setItem(inputList.innerText, item1);

  // create completed and delete btn
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completeBtn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  newTodoList.append(completeBtn);


  const deletedBtn = document.createElement("button");
  deletedBtn.classList.add("deletedBtn");
  deletedBtn.innerHTML = '<i class="fas fa-trash"></i>';
  newTodoList.append(deletedBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = '<i class="far fa-edit"></i>';
  newTodoList.append(editBtn);

  // console.log(newTodoList);

  // append div to a ul
  todoList.append(newTodoList)
  });
}
displayTodos();