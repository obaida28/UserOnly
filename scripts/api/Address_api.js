import { get , post , log , URL } from "../__main_js.js"
const fullURL = URL() + '/Address';
//------------Start----------------

//get all address for user
const get_all_address_for_user = async (user_id) => {
    return await get(fullURL + "?user_id = " + user_id);
}

//add address
const add_address = async (adrs,User_id) => {
    const body = { 'Address': adrs , 'User_id' : User_id}
    const data = await post(fullURL,body);
}

export {get_all_address_for_user,add_address}