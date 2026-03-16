import { createNewProject, addProjectToTodoList, findProjectInTodoList, findProjectIndex, editProjectName, editProjectDescription, removeProjectFromTodoList } from "./project.js";

// Todo item code

// Details for todo item
class Todo {
    constructor(name, description = "", dueDate = null, priority = false, notes = "") {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; // date-fns
        this.priority = priority;
        this.notes = notes;
    }
    // complete class field
    complete = false;
}

// Create a new todo item
function createNewTodo(name, description, dueDate, priority, notes) {
    let todo = new Todo(name, description, dueDate, priority, notes);
    return todo;
}

// Find todo item in project
function findTodoItemInProject(todoName, project) {
    // Return the todo item
    return project.todoItems.find((todo) => todo.name == todoName);
}

// Find todo item index in project
function findTodoItemIndexInProject(todoName, project) {
    // Return the todo item
    return project.todoItems.findIndex((todo) => todo.name == todoName);
}

// Find todo item in todo list
function findTodoItemInList(todoName) {
    for (const project of todoList) {
        const todoItem = findTodoItemInProject(todoName, project);
        if (todoItem) {
            return todoItem;
        }
    }
}

// Add a todo item name
function addTodoToProject(todoItem, projectName) {
    let project = findProjectInTodoList(projectName);
    project.todoItems.push(todoItem);
}

// Edit a todo item description
function editTodoDescription(todoName, newDescription) {
    // edit todo details
}

// Edit a todo item due date
function editTodoComplete(todoName) {
    todoItem.complete = !todoItem.complete;
}

// Edit a todo item priority status
function editTodoComplete(todoItem) {
    todoItem.complete = !todoItem.complete;
}

// Edit todo item notes
function editTodoComplete(todoItem) {
    todoItem.complete = !todoItem.complete;
}

// Edit todo item completion status
function editTodoComplete(todoItem) {
    todoItem.complete = !todoItem.complete;
}

// Removes a todo item
function removeTodo(todo) {
    // remove code.
}

export {createNewTodo, editTodo, completeTodo, deleteTodo};