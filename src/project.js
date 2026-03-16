import { todoList } from "./todolist.js";

// Project code

// Details for a project item
class Project {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }
    todoItems = [];
}

// Create a new project item
function createNewProject(name) {
    let project = new Project(name);
    return project;
}

// Add a project to the todo list
function addProjectToTodoList(project) {
    todoList.push(project);
}

//----------------------------------------------

// Create default project and add to todo list
addProjectToTodoList(createNewProject("Default"));

//----------------------------------------------

// Find project in the todo list
function findProjectInTodoList(projectName) {
    return todoList.find((project) => project.name == projectName);
}

function findProjectIndex(projectName) {
    return todoList.findIndex((project) => project.name == projectName)
}

// Edit a project name
function editProjectName(projectName, newName) {
    let project = findProjectInTodoList(projectName);
    project.name = newName;
}

// Edit a project description
function editProjectDescription(projectName, newDescription) {
    let project = findProjectInTodoList(projectName);
    project.description = newDescription;
}

// Remove a project from the todo list
function removeProjectFromTodoList(projectName) {
    let projectIndex = findProjectIndex(projectName);
    todoList.splice(projectIndex, 1);
}

export { createNewProject, addProjectToTodoList, findProjectInTodoList, findProjectIndex, editProjectName, editProjectDescription, removeProjectFromTodoList };