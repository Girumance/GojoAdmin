import {combineReducers} from "redux"
import Login from "./Login"
import Userdata from "./UserData"
import SnakBarState from "./SnakBarState"
const reducers = combineReducers({
login:Login,
userdata:Userdata,
snakbarState:SnakBarState
}
)

export default reducers;
