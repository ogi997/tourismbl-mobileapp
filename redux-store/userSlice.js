import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../api/users.service";
import authUsers from "../api/auth-users.service";

export const login = createAsyncThunk(
  "userSlice/login",
  async ({ username, password }) => {
    return await userService.login(username, password);
  }
);

export const status = createAsyncThunk("userSlice/status", async () => {
  return await authUsers.getStatus();
});

export const register = createAsyncThunk(
  "userSlice/register",
  async ({ value }) => {
    return await userService.register(value);
  }
);

export const changeAvatar = createAsyncThunk(
  "userSlice/changeAvatar",
  async ({ avatar }) => {
    return await authUsers.changeAvatar(avatar);
  }
);

export const updateProfile = createAsyncThunk(
  "userSlice/updateProfile",
  async ({ value }) => {
    return await authUsers.updateProfile(value);
  }
);

export const updatePassword = createAsyncThunk(
  "userSlice/updatePassword",
  async ({ value }) => {
    return await authUsers.updatePassword(value);
  }
);

const logoutAction = (state) => {
  state.authenticated = false;
  state.loading = false;
  state.user = null;
  userService.logout();
};

export const userSlice = createSlice({
  name: "users",
  initialState: {
    authenticated: false,
    authenticatedFailed: false,
    loading: false,
    user: null,
    admin: false,
  },
  reducers: {
    logout: logoutAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.authenticated = true;
        state.authenticatedFailed = false;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state) => {
        state.authenticated = false;
        state.authenticatedFailed = true;
        state.loading = false;
      });

    builder
      .addCase(status.fulfilled, (state, action) => {
        state.authenticated = true;
        state.loading = false;
        state.user = action.payload;
        state.admin = action.payload.is_admin;
      })
      .addCase(status.pending, (state) => {
        state.loading = true;
      })
      .addCase(status.rejected, (state) => {
        state.authenticated = false;
        state.loading = false;
        state.authenticatedFailed = true;
      });

    builder
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(changeAvatar.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changeAvatar.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeAvatar.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(updatePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePassword.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
