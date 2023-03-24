import axios from "axios";

export const broker = async (username: any) => {
  try {
    const token = localStorage.getItem("token");
    localStorage.setItem("username", username);
    const { data } = await axios.post(
      "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/micorservices-broker-by-email",
      username,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem("brokerId", data.result[0].id);
    localStorage.setItem("firstName", data.result[0].firstName);
    localStorage.setItem("lastName", data.result[0].lastName);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
