import { createSlice } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
	name: 'transactions',
	initialState: {
		transactions: []
	},
	reducers: {
		setTransactions: (state, action) => {
			state.transactions = action.payload;
		}
	}
})

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;