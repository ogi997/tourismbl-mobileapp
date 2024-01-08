import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locations from "../api/locations.service";

export const createLocation = createAsyncThunk(
  "locationsSlice/createLocation",
  async ({ value }) => {
    return await locations.createLocation(value);
  }
);

export const getAllLocations = createAsyncThunk(
  "locationsSlice/getAllLocations",
  async ({ category }) => {
    return await locations.getAllLocations(category);
  }
);

export const getLocationById = createAsyncThunk(
  "locationsSlice/getLocationById",
  async ({ id }) => {
    return await locations.getLocationById(id);
  }
);

export const deleteLocationById = createAsyncThunk(
  "locationsSlice/deleteLocationById",
  async ({ id }) => {
    return await locations.deleteLocationById(id);
  }
);

const deleteLocationFromState = (state, action) => {
  state.locations = state.locations.filter(
    (item) => item.id != action.payload.id
  );
};

const deleteLocation = (state) => {
  state.location = null;
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    loading: false,
    location: null,
    deleteLoading: false,
  },
  reducers: {
    clearLocationById: deleteLocationFromState,
    clearLocation: deleteLocation,
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
      .addCase(createLocation.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.loading = false;
        console.error(action);
      });

    builder
      .addCase(deleteLocationById.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteLocationById.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteLocationById.rejected, (state) => {
        state.deleteLoading = false;
      });
  },
});
export const { clearLocationById, clearLocation } = locationsSlice.actions;
export default locationsSlice.reducer;
