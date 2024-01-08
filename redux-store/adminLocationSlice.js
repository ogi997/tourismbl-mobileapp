import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminLocation from "../api/admin-location.service";

export const getAllLocations = createAsyncThunk(
  "adminLocationSlice/getAllLocation",
  async () => {
    return await adminLocation.getAllLocations();
  }
);

export const getLocationById = createAsyncThunk(
  "adminLocationSlice/getLocationById",
  async ({ id }) => {
    return await adminLocation.getLocationById(id);
  }
);

export const activeLocationById = createAsyncThunk(
  "adminLocationsSlice/activeLocationById",
  async (id) => {
    return adminLocation.activeLocationById(id);
  }
);

export const deleteLocationById = createAsyncThunk(
  "adminLocationsSlice/deleteLocationById",
  async (id) => {
    return await adminLocation.deleteLocationById(id);
  }
);

export const updateLocationById = createAsyncThunk(
  "adminLocationSlice/updateLocationById",
  async ({ id }) => {
    return adminLocation.updateLocationById(id);
  }
);

export const adminLocationSlice = createSlice({
  name: "adminLocation",
  initialState: {
    locations: [],
    location: null,
    loading: false,
    activeLoading: false,
    deleteLoading: false,
    updateLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.loading = false;
      })
      .addCase(getAllLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLocations.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getLocationById.fulfilled, (state, action) => {
        console.log(action.payload);
        state.location = action.payload;
        state.loading = false;
      })
      .addCase(getLocationById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLocationById.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(activeLocationById.fulfilled, (state, action) => {
        state.location.active = action.payload.active;
        state.activeLoading = false;
      })
      .addCase(activeLocationById.pending, (state) => {
        state.activeLoading = true;
      })
      .addCase(activeLocationById.rejected, (state) => {
        state.activeLoading = false;
      });

    builder
      .addCase(deleteLocationById.fulfilled, (state, action) => {
        state.deleteLoading = false;
      })
      .addCase(deleteLocationById.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteLocationById.rejected, (state) => {
        state.deleteLoading = false;
      });

    builder
      .addCase(updateLocationById.fulfilled, (state) => {
        state.updateLoading = false;
      })
      .addCase(updateLocationById.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateLocationById.rejected, (state) => {
        state.updateLoading = false;
      });
  },
});

export default adminLocationSlice.reducer;
