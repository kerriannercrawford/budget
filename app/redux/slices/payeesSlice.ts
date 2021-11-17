import { createSlice } from '@reduxjs/toolkit';

export const payeesSlice = createSlice({
	name: 'payees',
	initialState: {
		payees: []
	},
	reducers: {
		setPayees: (state, action) => {
			state.payees = action.payload;
		}
	}
})

export const { setPayees } = payeesSlice.actions;
export default payeesSlice.reducer;