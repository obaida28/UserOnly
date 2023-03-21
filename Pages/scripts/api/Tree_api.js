import { get , post , log , URL } from "../__main_js.js"
const fullURL = URL() + '/Product';
//------------Start----------------

//get all address for user
// const get_a = async () => {
//     return await get(fullURL);
// }
const get_a = async () => {
    return await get(fullURL);
}
//add address
// const add_address = async (adrs,User_id) => {
//     const body = { 'Address': adrs , 'User_id' : User_id}
//     const data = await post(fullURL,body);
// }

export {get_a}