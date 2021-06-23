import { IOrdersState } from "./orders.interfaces";
import constants from "./orders.constants";

const initialState: IOrdersState = {
    prices: {
        subscription_plans: []
    },
    order: {},
    errors: {
        message: ""
    },
    loading: true,
}

const ordersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case constants.ORDER_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case constants.GET_PRICES_SUCCESS:
            return {
                ...state,
                prices: action.payload
            }

        case constants.GET_PRICES_FAIL:
            return {
                ...state,
                errors: action.payload
            }

        case constants.POST_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload
            }

        case constants.POST_ORDER_FAIL:
            return {
                ...state,
                errors: action.payload
            }

        default: return state;
    }
}

export default ordersReducer;
