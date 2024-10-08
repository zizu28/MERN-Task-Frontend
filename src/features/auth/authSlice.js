import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const localUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: localUser ? localUser : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    try{
        return await authService.register(user);
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const logout = createAsyncThunk("auth/logout", () => authService.logout())

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try{
        return await authService.login(user);
    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: state => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        }
    },
    extraReducers: builder => {
        builder.addCase(register.pending, state => { state.isLoading = true; });
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        builder.addCase(logout.fulfilled, state => {
            state.user = null;
        })
        builder.addCase(login.pending, state => { state.isLoading = true; });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer