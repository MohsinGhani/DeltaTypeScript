import axios from "axios";
const FileDownload = require("js-file-download");

export const getQuoteDocument = async (quoteId: any) => {
  try {
    const token = localStorage.getItem("token");

    await axios({
      // url:  `https://o2kgqb19q9.execute-api.ap-southeast-2.amazonaws.com/test-binary/test-get-quote-document?quoteId=${quoteId}`,
      url: `https://u090h4woii.execute-api.ap-southeast-2.amazonaws.com/delta-microservices/quote-get-quote-document?quoteId=${quoteId}`,
      method: "GET",
      responseType: "blob", // Important
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      FileDownload(response.data, "quote.pdf");
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
