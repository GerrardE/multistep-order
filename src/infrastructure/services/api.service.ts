import axios from "axios";

axios.defaults.baseURL = "https://us-central1-sensei-edfdf.cloudfunctions.net/app/api/v1/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export const getResource = async (path: string): Promise<unknown> => {
  try {
    const response = await axios.get(path);
    return response.data.payload;
  } catch (error) {
    throw error.response.data;
  }
};

export const postResource = (path: string, body: any): Promise<unknown> => {
  try {
    const response = axios.post(path, body);
    return response;
  } catch (error) {
    throw error.response.data;
  }
};
