import {createSlice, PayloadAction } from "@reduxjs/toolkit"


/**
 * AuthenticationInfo Slice
 * 인증 정보 제공
 * 
 */

export interface AuthenticationMemberInfo {
	id : string
	nickname : string
	email : string
	role : string
	isActivated : boolean
}

export interface AuthenticationInfo {
	accessToken : string | null
	member : AuthenticationMemberInfo | null
}

const initialState : AuthenticationInfo = {
	accessToken : null,
	member : null
}

const authenticationSlice = createSlice({
	name : "AuthenticationInfo",
	initialState,
	reducers : {
		setAccessToken(state, action : PayloadAction<string | null>){
			state.accessToken = action.payload
		},

		setMember(state, action : PayloadAction<AuthenticationMemberInfo | null>) {
			state.member = action.payload
		}
	}
})

export const {setAccessToken, setMember} = authenticationSlice.actions
export default authenticationSlice.reducer