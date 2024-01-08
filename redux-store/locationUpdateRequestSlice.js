import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationUpdateRequest from "../api/location-update-request.service";

export const createUpdateRequest = createAsyncThunk(
  "locationUpdateRequestSlice/createUpdateRequest",
  async ({ value }) => {
    return await locationUpdateRequest.createUpdateRequest(value);
  }
);

export const checkIfRequestExist = createAsyncThunk(
  "locationUpdateRequestSlice/checkIfRequestExist",
  async ({ id }) => {
    return locationUpdateRequest.checkIfRequestExist(id);
  }
);

export const locationUpdateRequestSlice = createSlice({
  name: "locationUpdateRequest",
  initialState: {
    loading: false,
    existRequest: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUpdateRequest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createUpdateRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUpdateRequest.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(checkIfRequestExist.fulfilled, (state, action) => {
        state.loading = false;
        state.existRequest = action.payload.exist;
      })
      .addCase(checkIfRequestExist.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkIfRequestExist.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default locationUpdateRequestSlice.reducer;
