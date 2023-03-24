import axios from "axios";

export const quotesByBrokerIdPolicy = async () => {
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
    const quoteIdsWithPolicies = getQuotesIdsWithPolicies(data);
    return quoteIdsWithPolicies;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getQuotesIdsWithPolicies = (data: any) => {
  let quoteIdsWithPolicies = [];
  for (let quote of data) {
    if (quote.status === "" || quote.status == null) {
      // if(quote.status==6||quote.status=="6"){
      quoteIdsWithPolicies.push(quote);
    }
  }
  // localStorage.setItem("quoteIdsWithPolicies", quoteIdsWithPolicies.toString());
  return quoteIdsWithPolicies;
};
