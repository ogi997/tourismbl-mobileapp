import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminLocationUpdate from "../api/admin-location-update.service";

export const getAllLocationUpdateRequest = createAsyncThunk(
  "adminLocationUpdateSlice/getAllLocationUpdateRequest",
  async () => {
    return await adminLocationUpdate.getAllLocationUpdateRequest();
  }
);

export const getLocationUpdateRequestById = createAsyncThunk(
  "adminLocationUpdateSlice/getLocationUpdateRequestById",
  async ({ id }) => {
    return await adminLocationUpdate.getLocationUpdateRequestById(id);
  }
);

export const deleteLocationUpdateRequestById = createAsyncThunk(
  "adminLocationUpdateSlice/deleteLocationUpdateRequestById",
  async ({ id }) => {
    return adminLocationUpdate.deleteLocationUpdateRequestById(id);
  }
);

export const adminLocationUpdateSlice = createSlice({
  name: "adminLocationUpdateSlice",
  initialState: {
    requestUpdateLocations: [],
    requestLocation: null,
    loading: false,
    deleteLoading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllLocationUpdateRequest.fulfilled, (state, action) => {
        state.requestUpdateLocations = action.payload;
        state.loading = false;
      })
      .addCase(getAllLocationUpdateRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLocationUpdateRequest.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getLocationUpdateRequestById.fulfilled, (state, action) => {
        state.requestLocation = action.payload;
        state.loading = false;
      })
      .addCase(getLocationUpdateRequestById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLocationUpdateRequestById.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(deleteLocationUpdateRequestById.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteLocationUpdateRequestById.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteLocationUpdateRequestById.rejected, (state) => {
        state.deleteLoading = false;
      });
  },
});

export default adminLocationUpdateSlice.reducer;
