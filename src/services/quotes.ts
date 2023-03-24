import axios from "axios";
import Cookies from "js-cookie";

export const quotes = async () => {
  try {
    const token = Cookies.get("token");

    const data = await axios({
      method: "post",
      url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/quote-get-quotes",
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
