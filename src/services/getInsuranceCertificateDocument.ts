import axios from "axios";
const FileDownload = require("js-file-download");

export const getInsuranceCertificateDocument = async (quoteId: number) => {
  try {
    const token = localStorage.getItem("token");

    await axios({
      url: `https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/quote-get-insurance-certificate?quoteId=${quoteId}`,
      method: "GET",
      responseType: "blob", // Important
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      FileDownload(response.data, "insurance-certificate.pdf");
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
