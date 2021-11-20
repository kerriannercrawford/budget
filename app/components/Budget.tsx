import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function Budget() {
	const state = useSelector((state: any) => state);
	const { groups, categories } = state;

	const generateDataGrid = () => {
		const res: any = [];

		groups.groups.forEach((group: any) => {
			const columns = makeColumns();
			const rows = makeRows(group._id);
			res.push(
				<Box>
					<p style={{ fontSize: '20px', marginTop: '5px', marginLeft: '5px', margin: '5px 0px 5px 15px' }}>{group.name.groupName}</p>
					<DataGrid rows={rows} columns={columns} hideFooter ></DataGrid>
				</Box>
			)
		})

		return res;
	}

	const makeColumns = () => {
		return [
			{ field: 'category', headerName: 'category', width: '200' },
			{ field: 'assigned', headerName: 'assigned', width: '200' },
			{ field: 'activity', headerName: 'activity', width: '200' },
			{ field: 'available', headerName: 'available', width: '200' }
		];
	}

	const makeRows = (categoryGroupId: string) => {
		const res: any = [];
		for (let i = 0; i < categories.categories.length; i += 1) {
			const { groupId, name, assigned, activity, available } = categories.categories[i];
			if (categoryGroupId !== groupId) {
				continue;
			}
			res.push({ 
				id: i, 
				category: name.categoryName, 
				assigned,
				activity,
				available
			})
		}
		return res;
	}

	return (
		<>
			{generateDataGrid()}
		</>
	)
}