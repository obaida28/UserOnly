import { AddEmp } from "./api.js"
import { log , getByName } from "./js.js"
const FormAddUser = "add_User"
const FormAddAddress = "add_Address"
const User_name = "name"
const password = "psw"
const mobile1 = "mobile1"
const mobile2 = "mobile2"
const address = "address"

// sign up event
document.getElementById(FormAddUser).addEventListener("submit", (e)=>{
    e.preventDefault()
    const adrs = [getByName(address)];
    AddEmp(getByName(User_name),getByName(password),getByName(mobile1),getByName(mobile2),adrs);
    fromAdd.reset();
});

// add address event
document.getElementById(FormAddAddress).addEventListener("submit", (e)=>{
    e.preventDefault()
    const adrs = [getByName(address)];
    AddEmp(getByName(User_name),getByName(password),getByName(mobile1),getByName(mobile2),adrs);
    fromAdd.reset();
});