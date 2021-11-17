import { Button, Divider } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import { setView } from "../../redux/slices/budgetSlice";

export default function NavBar() {
	const dispatch = useDispatch();
	const state = useSelector((state: any) => state);

	const generateAccounts = () => {
		const { accounts } = state.accounts;
		const res: any = [];
		accounts.forEach((account: any) => {
			res.push(<Button>{account.accountName}</Button>)
		})
		res.push(<Divider/>)
		res.push(<Button>Add an Account</Button>)
		return res;
	}

	return (
		<>
			<Button onClick={() => dispatch(setView('budget'))}>Budget</Button>
			<Button onClick={() => dispatch(setView('accounts'))}>All Accounts</Button>
			<Divider />
			{generateAccounts()}
		</>
	)
}