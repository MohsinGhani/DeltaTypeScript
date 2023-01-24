import axios from "axios";

export const login = async (username: any, password: any) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/login",

      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },

        // Credentials: "include",
      }
    );
    console.log("MAIN HEROIN HOUN", data);
    return data;
  } catch (error: any) {
    console.log("MAIN VILLAN HOUN", error);
    throw new Error(error);
  }
};
