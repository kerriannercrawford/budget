import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../redux/slices/budgetSlice';

export default function ListAccounts() {
	const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

	const [ open, setOpen ] = useState(true);

	const handleClick = () => {
		setOpen(!open);
	}

	const generateAccounts = () => {
		const res: any = [];
		const { accounts } = state.accounts;
		accounts.forEach((account: any) => {
			res.push(<List component='div' disablePadding>
				<ListItemButton sx={{ pl: 4 }}>
					<ListItemText primary={account.accountName} />
				</ListItemButton>
			</List>)
		})
		return res;
	}

	return <List
	sx={{ width: '86%', marginLeft: '7%', marginRight: '7%' }}
	>
		<ListItemButton onClick={handleClick} style={{ width: '100%'}}>
			<ListItemText primary={state.user.budgetName || 'Budget'} />
			{open ? <ExpandLess /> : <ExpandMore />}
		</ListItemButton>
		<Collapse in={open} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
				{generateAccounts()}
			</List>
		</Collapse>
	</List>
}
