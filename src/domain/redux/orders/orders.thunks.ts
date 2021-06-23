import toast from "react-hot-toast";
import { Dispatch } from "redux";
import apiService from "../../../infrastructure/services/api.service";
import * as actions from "./orders.actions";
import { IFormState } from "./orders.interfaces";

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

export const postOrderThunk = (data: IFormState) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(actions.loading(true));
      const response = await apiService.postResource("https://httpbin.org/post", data);
      dispatch(actions.loading(false));
      dispatch(actions.postOrderSuccess(response.data));
      toast.success("Order successfully saved!")
    } catch (errors) {
      dispatch(actions.loading(false));
      dispatch(actions.postOrderFail(errors));
    }
  };
