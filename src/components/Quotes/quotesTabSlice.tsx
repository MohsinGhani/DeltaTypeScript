import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { quotes } from "../../services/quotes";

export const getQuotes = createAsyncThunk(
  "quotes/getQuotes",
  async (_, thunkAPI) => {
    try {
      const response = await quotes();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    token: "",
    isLoading: false,
    isSuccess: false,
    error: "",
    quotes: [
      {
        id: 308,
        policyId: 0,
        brokerId: 140,
        quoteClient: {
          id: 115,
          businessNumber: "48379255767",
          organizationName: "Wynnum Manly Leagues Club Ltd",
          description: "Hospitality club",
          website: "www",
          phone: null,
          email: null,
          address1: "92 Wondall Road",
          address2: "Manly West",
          postcode: "4179",
          stateCode: "QLD",
          countryId: 2,
          countryName: "Australia",
          suboccupationId: 1531,
          suboccupationName: "Clubs (Hospitality)",
          clientEntityId: 9,
          clientEntityName: "Unlisted public company",
        },
        quoteRatingRegions: [
          {
            id: 4960,
            lastYearAmount: 24060384,
            currentYearAmount: 0,
            staffNumbers: 128,
            totalAssets: 0,
            ratingRegionId: 11,
            ratingRegionName: "QLD",
          },
        ],
        quoteProducts: [],
        quotePackages: [
          {
            id: 18,
            name: "Delta Management Liability Package",
            quoteProducts: [
              {
                id: 80,
                quoteLineId: 714,
                name: "Directors & Officers and Corporate Legal Liability",
                quoteProductSections: [
                  {
                    id: 716,
                    productSectionId: 105,
                    productSectionName:
                      "Directors & Officers and Corporate Legal Liability",
                    liability: 1000000,
                    excess: 5000,
                    premium: 0,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 81,
                quoteLineId: 715,
                name: "Employment Practices Liability",
                quoteProductSections: [
                  {
                    id: 717,
                    productSectionId: 106,
                    productSectionName: "Employment Practices Liability",
                    liability: 1000000,
                    excess: 10000,
                    premium: 1898,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 84,
                quoteLineId: 716,
                name: "Statutory Liability ",
                quoteProductSections: [
                  {
                    id: 718,
                    productSectionId: 110,
                    productSectionName: "Statutory Liability",
                    liability: 250000,
                    excess: 5000,
                    premium: 0,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 88,
                quoteLineId: 717,
                name: "Commercial Crime ",
                quoteProductSections: [
                  {
                    id: 719,
                    productSectionId: 114,
                    productSectionName: "Commercial Crime",
                    liability: 500000,
                    excess: 20000,
                    premium: 1980,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 79,
                quoteLineId: 718,
                name: "Commercial Legal Expenses",
                quoteProductSections: [
                  {
                    id: 720,
                    productSectionId: 104,
                    productSectionName: "Commercial Legal Expenses",
                    liability: 100000,
                    excess: 0,
                    premium: 280,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 534,
        policyId: 0,
        brokerId: 140,
        quoteClient: {
          id: 303,
          businessNumber: "30122704796",
          organizationName: "Veracity Business Solutions Pty Ltd ",
          description: "Managed IT services & IT Consultants",
          website: "https://veracity.com.au/",
          phone: null,
          email: null,
          address1: "3B, 50 Logan Road",
          address2: "Woolloongabba",
          postcode: "4102",
          stateCode: "QLD",
          countryId: 2,
          countryName: "Australia",
          suboccupationId: 1574,
          suboccupationName:
            "Internet Service Providers and Web Search Portals",
          clientEntityId: 1,
          clientEntityName: "Proprietary Limited Company",
        },
        quoteRatingRegions: [
          {
            id: 8802,
            lastYearAmount: 3000000,
            currentYearAmount: 3000000,
            staffNumbers: 10,
            totalAssets: 0,
            ratingRegionId: 11,
            ratingRegionName: "QLD",
          },
        ],
        quoteProducts: [],
        quotePackages: [
          {
            id: 18,
            name: "Delta Management Liability Package",
            quoteProducts: [
              {
                id: 80,
                quoteLineId: 1384,
                name: "Directors & Officers and Corporate Legal Liability",
                quoteProductSections: [
                  {
                    id: 1386,
                    productSectionId: 105,
                    productSectionName:
                      "Directors & Officers and Corporate Legal Liability",
                    liability: 1000000,
                    excess: 10000,
                    premium: 840,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 81,
                quoteLineId: 1385,
                name: "Employment Practices Liability",
                quoteProductSections: [
                  {
                    id: 1387,
                    productSectionId: 106,
                    productSectionName: "Employment Practices Liability",
                    liability: 500000,
                    excess: 10000,
                    premium: 320,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 84,
                quoteLineId: 1386,
                name: "Statutory Liability ",
                quoteProductSections: [
                  {
                    id: 1388,
                    productSectionId: 110,
                    productSectionName: "Statutory Liability",
                    liability: 250000,
                    excess: 5000,
                    premium: 224,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 88,
                quoteLineId: 1387,
                name: "Commercial Crime ",
                quoteProductSections: [
                  {
                    id: 1389,
                    productSectionId: 114,
                    productSectionName: "Commercial Crime",
                    liability: 250000,
                    excess: 10000,
                    premium: 299,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
              {
                id: 79,
                quoteLineId: 1388,
                name: "Commercial Legal Expenses",
                quoteProductSections: [
                  {
                    id: 1390,
                    productSectionId: 104,
                    productSectionName: "Commercial Legal Expenses",
                    liability: 100000,
                    excess: 0,
                    premium: 110,
                    ratingDefinitionId: null,
                    ratingDefinitionName: null,
                    quoteRatingParameters: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuotes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getQuotes.fulfilled, (state, action) => {
      const myObj: { token: string } = Object(action.payload);
      state.isLoading = false;
      Cookies.set("token", myObj?.token);
      state.isSuccess = true;
      // state.token = action.payload;
    });
    builder.addCase(getQuotes.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.token = "";

      // state.error = action.payload;
    });
  },
});

export default quotesSlice.reducer;
