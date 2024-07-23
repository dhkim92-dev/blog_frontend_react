import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slice/authentication";

export const rootStore = configureStore({
	reducer : {
		authenticationInfo : authenticationSlice
	},
	devTools : process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;