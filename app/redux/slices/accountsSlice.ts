import { createSlice } from '@reduxjs/toolkit';

export const accountsSlice = createSlice({
	name: 'accounts',
	initialState: {
		accounts: [],
		individualAccount: false,
		accountId: ''
	},
	reducers: {
		setAccounts: (state, action) => {
			state.accounts = action.payload;
		},
		activateIndividualAccount: (state, action) => {
			state.accountId = action.payload;
			state.individualAccount = true;
		},
		resetIndividualAccount: (state) => {
			state.accountId = '';
			state.individualAccount = false;
		}
	},
})

export const { setAccounts, activateIndividualAccount, resetIndividualAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
