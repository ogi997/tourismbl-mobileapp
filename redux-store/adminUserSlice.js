import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminUser from "../api/admin-users.service";

export const getAllUsers = createAsyncThunk(
  "adminUserSlice/getAllUsers",
  async () => {
    return await adminUser.getAllUsers();
  }
);

export const getUserById = createAsyncThunk(
  "adminUserSlice/getUserById",
  async (id) => {
    return await adminUser.getUserById(id);
  }
);

export const toggleActiveUserById = createAsyncThunk(
  "adminUserSlice/toggleActiveUserById",
  async (id) => {
    return await adminUser.toggleActiveUserById(id);
  }
);

export const toggleAdminUserById = createAsyncThunk(
  "adminUserSlice/toggleAdminUserById",
  async (id) => {
    return await adminUser.toggleAdminUserById(id);
  }
);

export const deleteUser = createAsyncThunk(
  "adminUserSlice/deleteUser",
  async (id) => {
    return await adminUser.deleteUser(id);
  }
);

export const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    users: [],
    user: null,
    loading: false,
    blockLoading: false,
    adminLoading: false,
    deleteLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.loading = false;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(toggleActiveUserById.fulfilled, (state, action) => {
        state.user.is_active = action.payload.is_active;
        state.blockLoading = false;
      })
      .addCase(toggleActiveUserById.pending, (state) => {
        state.blockLoading = true;
      })
      .addCase(toggleActiveUserById.rejected, (state) => {
        state.blockLoading = false;
      });

    builder
      .addCase(toggleAdminUserById.fulfilled, (state, action) => {
        state.user.is_admin = action.payload.is_admin;
        state.adminLoading = false;
      })
      .addCase(toggleAdminUserById.pending, (state) => {
        state.adminLoading = true;
      })
      .addCase(toggleAdminUserById.rejected, (state) => {
        state.adminLoading = false;
      });

    // builder
    //   .addCase(activateUser.fulfilled, (state) => {
    //     state.blockLoading = false;
    //     state.user.is_active = true;
    //   })
    //   .addCase(activateUser.pending, (state) => {
    //     state.blockLoading = true;
    //   })
    //   .addCase(activateUser.rejected, (state) => {
    //     state.blockLoading = false;
    //   });

    // builder
    //   .addCase(blockUser.fulfilled, (state) => {
    //     state.blockLoading = false;
    //     state.user.is_active = false;
    //   })
    //   .addCase(blockUser.pending, (state) => {
    //     state.blockLoading = true;
    //   })
    //   .addCase(blockUser.rejected, (state) => {
    //     state.blockLoading = false;
    //   });

    // builder
    //   .addCase(makeUserAdmin.fulfilled, (state) => {
    //     state.adminLoading = false;
    //     state.user.is_admin = true;
    //   })
    //   .addCase(makeUserAdmin.pending, (state) => {
    //     state.adminLoading = true;
    //   })
    //   .addCase(makeUserAdmin.rejected, (state) => {
    //     state.adminLoading = false;
    //   });

    // builder
    //   .addCase(removeUserAdmin.fulfilled, (state) => {
    //     state.adminLoading = false;
    //     state.user.is_admin = false;
    //   })
    //   .addCase(removeUserAdmin.pending, (state) => {
    //     state.adminLoading = true;
    //   })
    //   .addCase(removeUserAdmin.rejected, (state) => {
    //     state.adminLoading = false;
    //   });

    builder
      .addCase(deleteUser.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.deleteLoading = false;
      });
  },
});

export default adminUserSlice.reducer;
