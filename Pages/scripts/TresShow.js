import { get_a } from "./api/Tree_api.js"
/*att*/
function hasList(obj){
    if (obj.hasOwnProperty("products")) 
        return obj["products"].length > 0;
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
function Father(name,array){
    let result = startFather(name);
    for(var ele of array)
    {
        var obj = new Object(ele);
        console.log(ele);
        console.log(obj);
        if(hasList(ele))
            result += Father(obj["name"],obj["products"]);
        else
            result += addSon(obj["name"]);
    }
    result += endFather();
    return result;
}

async function main(){
    let root = document.querySelector("#myUL");
    const api = await get_a();
    let res = startFather("Products");
    for(var prod of api)
    {
        if(hasList(prod))
            res += Father(prod["name"] , prod["products"]);
        else
            res += addSon(prod["name"]);
    }
    root.innerHTML = res + endFather();
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

