import { get , post , log , URL  } from "../__main_js.js"
const fullURL = URL() + '/User';
//------------Start----------------

//get all user
const get_all_users = async () => {
    return await get(fullURL);
}

//add user
const add_user = async (name,pass,mob1,mob2,adrs) => {
    const body = { 'name': name , 'password':pass , 'mobile1':mob1 , 'mobile2':mob2 , 'Addresses': adrs }
    const data = await post(fullURL,body);
}

export {get_all_users,add_user}