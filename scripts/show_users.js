import { AddEmp, getAllUsers } from "./api.js"
import { table } from "./js.js"
const tableNameShow = "users"
var users = await getAllUsers(tableNameShow);
//handle users and its addresess
table(users,tableNameShow);
// const nameText = "name"
// //const ButtonAdd = "addEmployee"
// const FormAdd = "addEmployee"
// //AddEmp(nameText);
// var fromAdd = document.getElementById(FormAdd);
// var EmpName = document.getElementById(nameText);
// fromAdd.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     AddEmp(EmpName.value,tableNameShow);
//     fromAdd.reset();
//     });