import { URL_ } from "./domin.js"
import { table , get , post } from "./js.js"
let mainURL = URL_
//first EndPoint
const getAllUsers = async (tableName) => {
    return await get(mainURL + '/User');
}
//second EndPoint
const AddEmp = async (name,tableName) => {
    const body = { 'name': name }
    const data = await post(mainURL + '/Employee',body);
    table(data,tableName);
}
export {getAllUsers,AddEmp}