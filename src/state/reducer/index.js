import { combineReducers } from "redux";
import AmountChange from "./AmountChange";


const reducers = combineReducers({
    amount : AmountChange
})
export default reducers