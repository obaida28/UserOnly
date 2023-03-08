import { getAllUsers } from "./api.js"
import { table } from "./js.js"
const tableNameShow = "users"
var users = await getAllUsers(tableNameShow);
//handle users and its addresess
table(users,tableNameShow);