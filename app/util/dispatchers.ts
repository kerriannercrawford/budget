import { setDate, setView } from '../redux/slices/budgetSlice';
import { setError, resetError } from '../redux/slices/infoSlice';
import { setAccounts } from '../redux/slices/accountsSlice';
import { setCategories } from '../redux/slices/categoriesSlice';
import { setGroups } from '../redux/slices/groupsSlice';
import { setPayees } from '../redux/slices/payeesSlice';
import { setTransactions } from '../redux/slices/transactionsSlice';
import { login } from '../redux/slices/userSlice';
import axios from 'axios';


export async function loginDispatchers(dispatch: any, user: any) {
	const accounts = await axios.get(`/api/accounts/user/${user._id}`);
	const categories = await axios.get(`/api/categories/user/${user._id}`);
	const groups = await axios.get(`/api/groups/user/${user._id}`);
	const payees = await axios.get(`/api/payees/user/${user._id}`);
	const transactions = await axios.get(`/api/transactions/user/${user._id}`);

	dispatch(login(user));
	dispatch(setDate())
	dispatch(setAccounts(accounts.data));
	dispatch(setCategories(categories.data));
	dispatch(setGroups(groups.data));
	dispatch(setPayees(payees.data));
	dispatch(setTransactions(transactions.data));
	dispatch(setView('budget'))
}

