import { URL_ } from "./domin.js"
import { table , get , post } from "./js.js"
let mainURL = URL_
//first EndPoint
const getAllEmps = async (tableName) => {
    const data = await get(mainURL + '/Employee');
    table(data,tableName);
}
//second EndPoint
const AddEmp = async (name,tableName) => {
    const body = { 'name': name }
    const data = await post(mainURL + '/Employee',body);
    table(data,tableName);
}
export {getAllEmps,AddEmp}