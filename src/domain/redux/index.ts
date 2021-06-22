import { combineReducers } from "redux";
import { IOrdersState } from "./orders/orders.interfaces";
import orders from "./orders/orders.reducers";

export interface RootState {
    orders: IOrdersState,
}

const appReducer = combineReducers({
    orders
});

const rootReducer = appReducer;

export default rootReducer;
