import axios from "axios";

axios.defaults.baseURL = "https://devbackend-bice.vercel.app/";

export default class API {
  //detail
  static createDetail = async (data) => {
    try {
      const res = await axios.post(`/api/v1/detail`, data);
      return res;
    } catch (error) {
      alert("Something went wrong");
      return error?.response?.data;
    }
  };
}
