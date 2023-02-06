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
    console.log("MAIN HEROIN HOUN", data);
    return data;
  } catch (error: any) {
    console.log("MAIN VILLAN HOUN", error);
    throw new Error(error);
  }
};
