import axios from "axios";

export const ABNClientByABNNumber = async (ABNNumber: any) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-client-by-abn",

      ABNNumber,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        // Credentials: "include",
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
