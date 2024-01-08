import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import choices from "../api/choices.service";

export const getCategories = createAsyncThunk(
  "choices/getCategories",
  async () => {
    return await choices.getCategories();
  }
);

export const getVisibilities = createAsyncThunk(
  "choices/getVisibilities",
  async () => {
    return await choices.getVisibilities();
  }
);

export const choiceSlice = createSlice({
  name: "choices",
  initialState: {
    categories: [],
    visibilities: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.categories = [];
      })
      .addCase(getCategories.rejected, (state) => {
        state.categories = [];
        state.loading = false;
      });

    builder
      .addCase(getVisibilities.fulfilled, (state, action) => {
        state.visibilities = action.payload;
        state.loading = false;
      })
      .addCase(getVisibilities.pending, (state) => {
        state.visibilities = [];
        state.loading = true;
      })
      .addCase(getVisibilities.rejected, (state) => {
        state.visibilities = [];
        state.loading = false;
      });
  },
});

export default choiceSlice.reducer;
