import { get_a } from "./api/Tree_api.js"
import { log , getByName , submit , table } from "./__main_js.js"
/* start define attribute*/
const array = "sons"
const name = "name"
const root_name = "Products"
const ul_name = "myUL"
const class_name1 = "caret"
const class_name2 = "nested"
const class_name3 = "active"
const class_name4 = "caret-down"
/* end define attribute */

/* start define function */
function hasList(obj){
    if (obj.hasOwnProperty(array)) 
        return get_array(obj).length > 0;
    return false;
}
function startFather(name){
    return `<li><span class="caret">${name}</span> <ul class="nested">`;
}
function endFather(){
    return `</ul></li>`;
}
function addSon(name){
    return `<li>${name}</li>`;  
}
function Father(Parent_name,array){
    let result = startFather(Parent_name);
    for(var ele of array)
    {
        var obj = new Object(ele);
        result += hasList(obj) ? Father(get_name(obj),get_array(obj)) : addSon(get_name(obj));
    }
    return result + endFather();
}
function get_name(obj){
    return obj["ele"][name];
}
function get_array(obj){
    return obj[array];
}
async function main(){
    let root = document.querySelector("#" + ul_name);
    const api = await get_a();
    root.innerHTML = Father(root_name,api);
}
function clickAll()
{
    var toggler = document.getElementsByClassName(class_name1);
    var i;
    for (i = 0; i < toggler.length; i++) 
    {
        toggler[i].addEventListener("click", function() 
        {
            this.parentElement.querySelector("." + class_name2).classList.toggle(class_name3);
            this.classList.toggle(class_name4);
        });
    }
}
/* end define function */

/* start calls */
await main();
clickAll();
/* end calls */