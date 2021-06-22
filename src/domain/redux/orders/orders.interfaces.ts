import constants from "./orders.constants";

export interface IOrdersState {
    prices: IRespSuccess,
    errors: IRespError,
    loading: boolean,
}

export interface ISubscriptionPlan {
    duration_months: number;
    price_usd_per_gb: number;
}

export interface IRespSuccess {
    subscription_plans: ISubscriptionPlan[];
}

export interface IRespError {}

export interface ILoading {
    type: typeof constants.ORDER_LOADING,
    payload: boolean,
}

export interface IGetPricesSuccess {
    type: typeof constants.GET_PRICES_SUCCESS,
    payload: IRespSuccess,
}

export interface IGetPricesFail {
    type: typeof constants.GET_PRICES_FAIL,
    payload: IRespError,
}
