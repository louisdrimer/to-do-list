// "open for extension, closed for modification"

// (Q: What is the responsiblity?)
// Defines a new todo details
class Todo {

    // strings: title, description, notes
    // date: dueDate
    // boolean: priority, complete
    constructor(title, description = "", dueDate = null, priority = false, notes = "", project = "default") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; // date-fns
        this.priority = priority;
        this.notes = notes;
        this.project = project;
    }
    // complete class field
    complete = false;
}

// Responsibility: Create a new todo item.
function createNewTodo(title, description, dueDate, priority, notes) {
    let todo = new Todo(title, description, dueDate, priority, notes);
    return todo;
}

// Edit a todo item         (May need to be split into ~5 seperate functions.)
function editTodo(todo) {
    // edit todo details
}

// Responsibility: Complete a given todo item.
function completeTodo(todo) {
    todo.complete = !todo.complete;
}

// Deletes a todo item
function deleteTodo(todo) {
    // delete code.
}

export {createNewTodo, editTodo, completeTodo, deleteTodo};