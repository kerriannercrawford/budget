import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
	name: 'accounts',
	initialState: {
		accounts: []
	},
	reducers: {
		setAccounts: (state, action) => {
			state.accounts = action.payload;
		}
	},
})

export const { setAccounts } = accountsSlice.actions;
export default accountsSlice.reducer;
