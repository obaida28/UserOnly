import { add_address } from "./api/Address_api.js"
import { log , getByName , submit , get_quary_string} from "./__main_js.js"

/* start attributes*/
const form_add_address = "add_Address"
const address = "address"
const user_id = get_quary_string("u_id")
/* end attributes*/

/* start functions call apis*/
// add user
function function_add_address(){
    const adrs = [getByName(address)];
    add_address(adrs,user_id);
}
/* end functions call apis*/

/* start events*/
// sign up event
submit(form_add_address , function_add_address);
/* end events*/