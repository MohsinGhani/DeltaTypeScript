import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MenuTabs from "./components/Tabs";

import Cookies from "js-cookie";

function App() {
  // useEffect(() => {
  // const token = Cookies.get("token");
  //   async function getRefreshToken() {

  //     const response = await axios.post(
  //     "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     },

  //     {withCredentials: true},
  //     );
  //     if (response.data.redirect) {
  //       clearInterval(refresh);
  //       localStorage.setItem(token, token);
  //     }
  //   }

  //   const refresh = setInterval(getRefreshToken, 4000);
  // }, []);

  // useEffect(() => {
  //   const token = Cookies.get("token");

  //   async function getRefreshToken() {
  //     const response = await axios.post(
  //       "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log("🚀 ~ response:", response);
  //     if (response.data.redirect) {
  //       clearInterval(refresh);
  //       history.replace(`${response.data.redirect }`);
  //       localStorage.clear();
  //     }
  //   }

  //   setInterval(getRefreshToken, 100000);
  // }, []);

  useEffect(() => {
    const token = Cookies.get("token");

    const interval = setInterval(async () => {
      console.log("This will be called every 2 seconds");

      // if (token) {
      try {
        const meradata = "";
        var config = {
          method: "post",
          url: "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: meradata,
        };

        const data = await axios(config);
        // const data = await axios({
        //   method: "POST",
        //   url: "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/refresh-token",
        //   data: "",
        //   headers: {
        //     // Authorization: `Bearer ${token}`,
        //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamVuLmJldHRyaWRnZUBjbGVhcmluc3VyYW5jZS5jb20uYXUiLCJqdGkiOiJlNDY0MmZiMi1kOTI0LTRjMGQtODIwZS01NGRhNDUwZTI0YzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJCcm9rZXIiLCJuYmYiOjE2NzcwNTUwNzUsImV4cCI6MTY3NzA1NTE5NSwiaXNzIjoiaHR0cHM6Ly9kZWx0YUluc3VyYW5jZS5jb20iLCJhdWQiOiJodHRwczovL2RlbHRhSW5zdXJhbmNlLmNvbSJ9.8rmYrdxvzevAK-A3LF1eYX4dXduUbuj8N0ZHvGIynWM`,

        //     // "Content-Type": "application/json",
        //   },
        // });

        console.log("🚀 ~ data:", data);
      } catch (e: any) {
        console.log("🚀 ~ e:", e);
      }
      // }
    }, 500000000000);

    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   const token = Cookies.get("token");

  //   (async function () {
  //     try {
  //       const data = await axios({
  //         method: "POST",
  //         url: "https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/delta-microservices-client-get-abn-clients-by-name",
  //         data: "Delta Insurance",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       console.log("🚀 ~ data:", data?.data?.result);
  //     } catch (e: any) {
  //       console.log("🚀 ~ e:", e);
  //     }
  //   })();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/:tab" element={<MenuTabs />} />
    </Routes>
  );
}

export default App;
