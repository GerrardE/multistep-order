import axios, { AxiosPromise } from "axios";
import { IFormState } from "../../domain/redux/orders/orders.interfaces";

axios.defaults.headers.post["Content-Type"] = "application/json";

class ApiService {
  static getResource(path: string): AxiosPromise {
    try {
      const response = axios.get(path);
      return response;
    } catch (error) {
      throw error;
    }
  };

  static postResource(path: string, body: IFormState): AxiosPromise {
    try {
      const response = axios.post(path, body);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default ApiService;
