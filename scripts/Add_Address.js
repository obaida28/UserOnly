import { add_Address } from "./api.js"
import { log , getByName } from "./js.js"
const FormAddAddress = "add_Address"
const address = "address"

// add address event
document.getElementById(FormAddAddress).addEventListener("submit", (e)=>{
    e.preventDefault()
    const adrs = [getByName(address)];
    add_Address(adrs,1);
    document.getElementById(FormAddAddress).reset();
});