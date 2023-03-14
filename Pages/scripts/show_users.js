import { get_all_users } from "./api/User_api.js"
import { log , getByName , submit , table } from "./__main_js.js"

/* start attributes*/
const tableNameShow = "users"
/* end attributes*/

/* start functions call apis*/
// add user
async function function_show_users(){
    var users = await get_all_users();
    var dplst =
    `<div class="dropdown">
        <span class="span_drp">show</span>
        <div class="dropdown-content"> _content_
        </div> 
    </div>`;  
    var buttons = 
    [
        `<div>
            <input id="user_id" type="hidden" value="_id_"/>
        </div>`  ,
        `<div>
            <a href="Add_Address.html?u_id=_id_" target="_blank">add address</a> 
        </div>`        
    ];  
    var index_button = [1,5]; //ordered  //index from all cols , not just showed
    table(users,tableNameShow,dplst,index_button,buttons);
}
/* end functions call apis*/

/* start events*/
function_show_users();
/* end events*/