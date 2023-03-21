import { get_all_users } from "./api/User_api.js"
import { log , getByName , submit , table } from "./__main_js.js"

/* start attributes*/
const rootId = "myUL"
const array_name = "products"
const prod_name = "name"
const root_text = "Products"
/* end attributes*/

/* start functions*/
// true if object has array in its properties
function hasList(obj){
    if (obj.hasOwnProperty("products")) 
        return obj["products"].length > 0;
    return false;
}
//start parent
function startFather(name){
    return `<li><span class="caret">${name}</span> <ul class="nested">`;
}
//end parent
function endFather(){
    return `</ul></li>`;
}
//add son
function addSon(obj){
    return `<li>${obj["name"]}</li>`;  
}
function Father(Parentobj , Root){
    let ParentName = Root ? Parentobj[prod_name] : root_text;
    let array = Root ? Parentobj[array_name] : Parentobj;
    let result = startFather(ParentName);
    for(var ele of array)
    {
        var obj = new Object(ele);
        result += hasList(ele) ? Father(obj) : addSon(obj);
    }
    result += endFather();
    return result;
}
function FatherRoot(data){
    return Father(data,true);
}

async function showTree(){
    let root = document.querySelector("#" + rootId);
    const api = await get_a();
    root.innerHTML = FatherRoot(api);
}

function clickAll()
{
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) 
    {
        toggler[i].addEventListener("click", function() 
        {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}
/* end functions */

/* start calls*/
showTree();
clickAll();
/* end calls*/