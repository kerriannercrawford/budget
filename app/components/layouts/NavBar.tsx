import Grid from '@mui/material/Grid';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Possum from '../Possum';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Button } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import ListAccounts from '../ListAccounts';
import { setView } from '../../redux/slices/budgetSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function NavBar({children}: any) {
  const dispatch = useDispatch();
	const state = useSelector((state: any) => state);

	const generateUponLogin = () => {
		return (
			<><Divider style={{ margin: '10px 0px 10px 0px' }}/>
			<Button>Settings</Button>
			<Divider style={{ margin: '10px 0px 10px 0px' }}/>
			<Button style={{ marginBottom: '5px' }} onClick={() => dispatch(setView('budget'))}>
				<MonetizationOnIcon fontSize='large' style={{ paddingRight: '5px' }}/>   
				Budget
			</Button>
			<Button style={{ marginBottom: '5px' }} onClick={() => dispatch(setView('allaccounts'))}>
				<AccountBalanceIcon fontSize='large' style={{ paddingRight: '5px' }}/>   
				All Accounts
			</Button>
			<Divider style={{ margin: '10px 0px 10px 0px' }}/>
			<ListAccounts/>
			<Divider style={{ margin: '10px 0px 10px 0px' }}/>
			<Button>Add New Account</Button></>
		)
	}

	return (
		<Provider store={store}>
			<Grid container direction='column'>
				<Possum />
				{ state.user.loggedIn && generateUponLogin() }
			</Grid>
		</Provider>
	)
}