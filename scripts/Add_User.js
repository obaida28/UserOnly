// const nameText = "name"
// //const ButtonAdd = "addEmployee"
import { AddEmp } from "./api.js"
import { table } from "./js.js"
const FormAdd = "add_User"
// //AddEmp(nameText);
var fromAdd = document.getElementById(FormAdd);
// var EmpName = document.getElementById(nameText);
fromAdd.addEventListener("submit", (e)=>{
    e.preventDefault()
    AddEmp("a","s","1231231230","0001112223","obaida");
    fromAdd.reset();
    });