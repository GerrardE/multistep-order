import constants from "./orders.constants";
import * as interfaces from "./orders.interfaces";

export const loading = (data: boolean) => ({
  type: constants.ORDER_LOADING,
  payload: data,
});

/* GET PRICES */
export const getPricesSuccess = (data: interfaces.IGetPricesSuccess) => ({
  type: constants.GET_PRICES_SUCCESS,
  payload: data,
});

export const getPricesFail = (data: interfaces.IGetPricesFail) => ({
  type: constants.GET_PRICES_FAIL,
  payload: data,
});

/* POST SUBSCRIPTION */
