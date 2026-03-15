// Project code

// Details for a project item
class Project {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }
}

// Create a new project item
function createNewProject(name) {
    let project = new Project(name);
    return project;
}

// Edit a given project item
function updateTodoProject(todo, project = "default") {
    todo.project = project;
}

// Assign a todo to a project
function assignTodoToProject(todo, project) {
    // code
}

// Remove a todo from a project
function removeTodoFromProject(todo, project) {
    // code
}

export {createNewProject, updateTodoProject, assignTodoToProject, removeTodoFromProject};