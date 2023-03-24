import axios from "axios";

export const login = async (username: any, password: any) => {
  try {
    // const token = localStorage.getItem("token");
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
      }
    );
    localStorage.setItem("token", data.token);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
