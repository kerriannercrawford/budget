import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { DataGrid } from '@mui/x-data-grid';

export default function Accounts() {
	const state = useSelector((state: any) => state);

	const generateDataGrid = () => {
		const { individualAccount, accountId } = state.accounts;
		const rows = makeRows(individualAccount, accountId);
		const columns = makeColumns(individualAccount);
		return <DataGrid rows={rows} columns={columns} hideFooter></DataGrid>
	}

	const getPayeeName = (payeeId: string) => {
		const { payees } = state.payees;
		console.log(payees)
		const payeeResult = payees.filter((payee: any) => payee._id === payeeId);
		return payeeResult[0].name.payeeName;
	};

	const getCategoryName = (categoryId: string) => {
		const { categories } = state.categories;
		const categoryResult = categories.filter((category: any) => category._id === categoryId);
		return categoryResult[0].name.categoryName;
	}

	const makeColumns = (individualAccount: boolean) => {
		const columns = [
			{ field: 'date', headerName: 'date', width: 150 },
			{ field: 'payee', headerName: 'payee', width: 200 },
			{ field: 'category', headerName: 'category', width: 250 },
			{ field: 'memo', headerName: 'memo', width: 200 },
			{ field: 'outflow', headerName: 'outflow', width: 150 },
			{ field: 'inflow', headerName: 'inflow', width: 150 }
		]
		if (individualAccount) {
			columns.unshift(
				{ field: 'account', headerName: 'account', width: 200 }
			)
		}
		return columns;
	}

	const makeRows = (individualAccount: boolean, accountId: string) => {
		const { transactions } = state.transactions;
		let filteredTransactions;
		if (individualAccount) {
			filteredTransactions = transactions.some((transaction: any) => transaction.accountId === accountId)
		} else {
			filteredTransactions = transactions;
		}
		console.log(filteredTransactions.length)

		const res: any = [];
		for (let i = 0; i < filteredTransactions.length; i += 1) {
			const { date, payeeId, categoryId, memo, outflow, inflow } = filteredTransactions[i];
			res.push({
				id: i,
				date,
				payee: getPayeeName(payeeId),
				category: getCategoryName(categoryId),
				memo,
				outflow,
				inflow
			});
		}
		return res;
	}

	return <>{generateDataGrid()}</>
}