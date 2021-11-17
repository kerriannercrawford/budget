import { createSlice } from '@reduxjs/toolkit';

export const infoSlice = createSlice({
	name: 'info',
	initialState: {
		errorMessage: '',
		error: false
	},
	reducers: {
		setError: (state, action) => {
			state.errorMessage = action.payload;
			state.error = true;
		},
		resetError: (state) => {
			state.errorMessage = '',
			state.error = false;
		}
	},
})

export const { setError, resetError } = infoSlice.actions;
export default infoSlice.reducer;