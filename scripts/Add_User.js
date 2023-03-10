import { AddEmp } from "./api.js"
import { log , getByName } from "./js.js"
const FormAdd = "add_User"
const User_name = "name"
const password = "psw"
const mobile1 = "mobile1"
const mobile2 = "mobile2"
var fromAdd = document.getElementById(FormAdd);
fromAdd.addEventListener("submit", (e)=>{
    e.preventDefault()
    const adrs = ["obaida" , "A"];
    AddEmp(getByName(User_name),getByName(password),getByName(mobile1),getByName(mobile2),adrs);
    fromAdd.reset();
});