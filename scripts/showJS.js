import { AddEmp, getAllEmps } from "./api.js"
const tableNameShow = "a"
getAllEmps(tableNameShow);
const nameText = "name"
//const ButtonAdd = "addEmployee"
const FormAdd = "addEmployee"
//AddEmp(nameText);
var fromAdd = document.getElementById(FormAdd);
var EmpName = document.getElementById(nameText);
fromAdd.addEventListener("submit", (e)=>{
    e.preventDefault()
    AddEmp(EmpName.value,tableNameShow);
    fromAdd.reset();
    });