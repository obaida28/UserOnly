import { add_user } from "./api/User_api.js"
import { log , getByName , submit } from "./__main_js.js"

/* start attributes*/
const form_add_user = "add_User"
const User_name = "name"
const password = "psw"
const mobile1 = "mobile1"
const mobile2 = "mobile2"
const address = "address"
/* end attributes*/

/* start functions call apis*/
// add user
function function_add_user(){
    const adrs = [getByName(address)];
    add_user(getByName(User_name),getByName(password),getByName(mobile1),getByName(mobile2),adrs);
}
/* end functions call apis*/

/* start events*/
// sign up event
submit(form_add_user , function_add_user);
/* end events*/