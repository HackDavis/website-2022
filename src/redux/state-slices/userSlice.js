import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		num: 0
	},
	reducers: {
		getUser: state => {
			state.num += 1
		}
	}
})

export const { getUser } = userSlice.actions

export default userSlice.reducer