import { Dispatch } from "redux";
import apiService from "../../../infrastructure/services/api.service";
import * as actions from "./orders.actions";

export const getPricesThunk = () => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(actions.loading(true));
      const response = await apiService.getResource("https://cloud-storage-prices-moberries.herokuapp.com/prices");
      dispatch(actions.loading(false));
      dispatch(actions.getPricesSuccess(response.data));
    } catch (errors) {
      dispatch(actions.getPricesFail(errors));
      dispatch(actions.loading(false));
    }
  };
