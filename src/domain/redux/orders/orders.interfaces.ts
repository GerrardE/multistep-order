import constants from "./orders.constants";

export interface IOrdersState {
    prices: IPriceResp,
    order: IRespSuccess,
    errors: IRespError,
    loading: boolean,
}

export interface IFormState {
    duration: number,
    amount: number,
    price: number,
    finalprice: number,
    upfrontpayment: string,
    cardno: string,
    cardexpdate: string,
    cardcode: string,
    acceptedterms: boolean,
    email: string,
}

export interface ISubscriptionPlan {
    duration_months: number;
    price_usd_per_gb: number;
}

export interface IRespSuccess {}

export interface IPriceResp extends IRespSuccess {
    subscription_plans: ISubscriptionPlan[];
}

export interface IRespError {}

export interface ILoading {
    type: typeof constants.ORDER_LOADING,
    payload: boolean,
}

/* GET PRICES */
export interface IGetPricesSuccess {
    type: typeof constants.GET_PRICES_SUCCESS,
    payload: IPriceResp,
}

export interface IGetPricesFail {
    type: typeof constants.GET_PRICES_FAIL,
    payload: IRespError,
}

/* POST ORDER */
export interface IPostOrderSuccess {
    type: typeof constants.POST_ORDER_SUCCESS,
    payload: IRespSuccess,
}

export interface IPostOrderFail {
    type: typeof constants.POST_ORDER_FAIL,
    payload: IRespError,
}
