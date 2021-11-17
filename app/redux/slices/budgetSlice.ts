import { createSlice } from '@reduxjs/toolkit';

export const budgetSlice = createSlice({
	name: 'budget',
	initialState: {
		currentYear: '',
		currentMonth: '',
		currentDay: '', 
		view: 'budget'
	},
	reducers: {
		setDate: (state) => {
			const date = new Date();
			state.currentYear = date.getFullYear().toString();
			state.currentMonth = (date.getMonth() + 1).toString();
			state.currentDay = date.getDate().toString();
		},
		setView: (state, action) => {
			state.view = action.payload;
		}
	},
})

export const { setDate, setView } = budgetSlice.actions;
export default budgetSlice.reducer;