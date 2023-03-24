import axios from "axios";
import Cookies from "js-cookie";

export const refreshToken = async () => {
  try {
    // const token = localStorage.getItem("token");
    const token = Cookies.get("token");
    console.log(await Cookies.get());
    const { data } = await axios.post(
      "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("MAIN HEROIN HOUN", data);
    // localStorage.setItem("token", data.token);
    // const meradata = "";
    // var config = {
    //   method: "post",
    //   url: "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     // Cookie: "cookie1=value;"
    //     // "credentials": "same-origin",
    //     //  "Cookie":".AspNetCore.Identity.Application=CfDJ8BYVcjA9c9VFvYMBCgWEWI3Rj6z9SM9h9RbqmqQOTPVpCuUn2bvwhDP31Srj8LHyXpj67zX8JwW1eFTT_kBLmehI4IITbo0Eg_oaCXFQsEmUunGEhyxNVhxFMBlB2MX8WjTeuSAe5dAk7HRSKKZcmpi1f5WFU3ALPP9nsGf1rEXQbBbf9Xd6HMIH7HzdpI7_Ekk6pNeaXhtnFgISL__jfNzd5WJi9qpXGoPlljuvtbtsnQTuZy3iWKxatTq0819SMs6lnbl8bYuFBI06vIiQc4-WSf9urKDQhzGaxhOdZLmrK5z3z4zwPF9oJIrWJQvq48GeFFOk4ROdltwVQDedHfj8Id0_ZvlYg7G_KNC5mgl4dXdfXXrTLXaFt3GYmntKLOibONk_UfShwPdZhY7QL4KAn0mWhgus3Npou5TdGdCFrbWMdB8HtgeBb5mZEcmNerFOTJwA4oUR5pqUk1RsB42y5fF2ajVVgj9fhz8BfrtYq1CrvmHhOOjSbqW6yslorBj3aTfzy2dqD8AfVHbbVUFKChy7S_z00xkSyUME0eL-q_7ULOLF9mWLvMSKJ3YPXloJQFn1_oWwsy01nLt1boiOitFnHm6cRSz7IX-yPNz5yIusv7XIhi9W8r6oLqhgJn0ARj4vzv-75Is4UQuWHMXIm7uIqxk4UtAi_mi4QKiwOuCIOQ46LSquAKwoc4cAgz22vrTlSYJEkbWhN5_9ndTZV1rH0jo9QV5LE6L3d162xyUbbrdR_T2qsKicjlDqrO6K-PhY6ueHcavxqHAK8sfWCPGvRZjBPn2jzmjfrXCm2j5VHLxbrQCr_-8nsD-balv2r_Tvl7G6Rt-VnwM3PUKM3vSjOGb-E-VhQ_UDR2kKUmhqavULJ_d5XmmaxuoZNQ; refreshToken=BNY2%2FB0qKH1mizwXbuokFW%2BBPAI5oLU8EhNc8eqWLqX%2B39Xxq9f%2FmCGEipVzoM%2FRL2%2BrU3JYjmlX4T5h7AXXpQ%3D%3D",
    //   },
    //   withCredentials: true,
    //   data: meradata,
    // };
    // const data = await axios(config);
    // let data = await axios.post("https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token", {
    //   // withCredentials: true,
    //   headers: {
    //     "Authorization":`Bearer ${token}`,
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // });
    return data;
    return "success";
  } catch (error: any) {
    // throw new Error(error);
    return "error";
  }
};
