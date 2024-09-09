import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice";

describe("store", () => {
    it("creates the store with the correct reducers", () => {
        const store = configureStore({
            reducer: {
                auth: authReducer,
                task: taskReducer
            }
        })

        const storeReducers = store.getState();
        expect(storeReducers).toHaveProperty("auth");
        expect(storeReducers).toHaveProperty("task");
    }); 
});