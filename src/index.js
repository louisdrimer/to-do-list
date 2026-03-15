// import { format, formatDistance, formatRelative, subDays } from "../node_modules/date-fns"
import "./styles.css";
import {createNewProject, updateTodoProject, assignTodoToProject, removeTodoFromProject} from "./project.js";
import {createNewTodo, editTodo, completeTodo, deleteTodo} from "./todo.js";


//////////////////////////////////////////////////////////
// example
const dryClothes = createNewTodo("Dry clothes");
completeTodo(dryClothes);
console.log(dryClothes);

// webpack export test
export { createNewTodo };