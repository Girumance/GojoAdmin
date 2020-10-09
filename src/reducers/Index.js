import {combineReducers} from "redux"
import Login from "./Login"
import Userdata from "./UserData"
const reducers = combineReducers({
login:Login,
userdata:Userdata
}
)

export default reducers;
