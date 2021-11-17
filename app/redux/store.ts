import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import accountsReducer from './slices/accountsSlice';
import categoriesReducer from './slices/categoriesSlice';
import groupsReducer from './slices/groupsSlice';
import payeesReducer from './slices/payeesSlice';
import transactionsReducer from './slices/transactionsSlice';
import infoReducer from './slices/infoSlice';
import budgetReducer from './slices/budgetSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		accounts: accountsReducer,
		categories: categoriesReducer,
		groups: groupsReducer,
		payees: payeesReducer,
		transactions: transactionsReducer,
		info: infoReducer,
		budget: budgetReducer
	}
})