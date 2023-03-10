import { URL_ } from "./domin.js"
import { table , get , post } from "./js.js"
let mainURL = URL_
//first EndPoint
const getAllUsers = async () => {
    return await get(mainURL + '/User');
}
//second EndPoint
const AddEmp = async (name,pass,mob1,mob2,adrs) => {
    const body = { 'name': name , 'password':pass , 'mobile1':mob1 , 'mobile2':mob2 , 
    'Addresses': adrs }
    const data = await post(mainURL + '/User',body);
    console.log(data)
}
export {getAllUsers,AddEmp}