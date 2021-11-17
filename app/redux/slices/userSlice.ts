import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		userId: '',
		budgetName: ''
	},
	reducers: {
		login: (state, action) => {
			const { username, firstName, lastName, _id, budgetName } = action.payload;
			state.username = username;
			state.firstName = firstName;
			state.lastName = lastName;
			state.userId = _id;
			state.budgetName = budgetName;
			state.password = '';
		},
		updateUsername: (state, action) => {
			state.username = action.payload;
		},
		updatePassword: (state, action) => {
			state.password = action.payload;
		}
	},
})

export const { login, updateUsername, updatePassword } = userSlice.actions;
export default userSlice.reducer;