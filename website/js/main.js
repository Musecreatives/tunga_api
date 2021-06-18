console.log("Welcome to My Todo Application v 1.0.1");


/// List of timeout to help keep track of our todos item state
let timeouts = {};


/**
 * Get Element By Id
 * @param {string} id 
 * @returns HtmlDocumentObject
 */
const getElement = (id) => document.getElementById(id);

/**
 * Add todo to list of our todos array
 * @param {string} todo "call mum"
 * @returns
 */
function addTodo(todo) {

}

/**
 * Load list of todos from local storage
 */
function loadFormStorage() {

}



/**
 * Handles Changes To Todo Item Checkbox Change
 * @param {HTMLChangeEvent} event 
 * @param {string} todo 
 */
function onTodoInputChange(event, todo) {

  if (event.target.checked === true) {

  }

  if (event.target.checked === false) {

  }

  getElement(todo).classList.toggle("completed");
}

/**
 * Add New Change Event Listeners On Each Todo Items
 */
function onNewTodoAdded() {

}

/**
 * Remove from out list of todo items
 * @param {string} todo 
 */
function removeTodo(todo) {

}

/**
 * On Add Todo Button Click
 */
function onClickAddTodoButton() {
  const newTodo = getElement("input-todo").value;
  addTodo(newTodo);
}



/**
 * Takes a todo string and returns a Html todo element
 * @param {string} todo 
 * @returns HTMLElement
 */
function todoItem(todo) {
  return `
    <div id="${todo}" class="todo-item">
    <span>${todo}</span>
    <input id="${"input" + todo}" class="todo-checkbox" type="checkbox"/>
    </div>
    `;
}

/**
 * Listen for enter key press on input todo text 
 */
getElement("input-todo").addEventListener("keydown",(event)=>{
  if(event.code === "Enter"){
    onClickAddTodoButton()
  }
})

// Load Data From Storage
loadFormStorage();