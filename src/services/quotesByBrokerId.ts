import axios from "axios";

export const quotesByBrokerId = async () => {
  try {
    const token = localStorage.getItem("token");
    const brokerId = localStorage.getItem("brokerId");
    const { data } = await axios.post(
      "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/quote-get-quotes",
      brokerId,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
