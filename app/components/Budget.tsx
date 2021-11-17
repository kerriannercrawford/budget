import { useSelector, useDispatch } from 'react-redux';
// @ts-ignore
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function Budget() {
	const state = useSelector((state: any) => state);
	const { groups, categories } = state;
	console.log(groups)
	console.log(categories)

	const generateDataGrid = () => {
		const res: any = [];

		groups.groups.forEach((group: any) => {
			const columns = makeColumns();
			const rows = makeRows(group._id);
			res.push(
				<Box>
					<h2>{group.name.groupName}</h2>
					<DataGrid rows={rows} columns={columns} hideFooter ></DataGrid>
				</Box>
			)
		})

		return res;
	}

	const makeColumns = () => {
		return [
			{ field: 'category', headerName: 'category', width: 150 },
			{ field: 'assigned', headerName: 'assigned', width: 150 },
			{ field: 'activity', headerName: 'activity', width: 150 },
			{ field: 'available', headerName: 'available', width: 150 }
		];
	}

	const makeRows = (groupId: string) => {
		const res: any = [];
		for (let i = 0; i < categories.categories.length; i += 1) {
			const currentCategory = categories.categories[i];
			console.log(currentCategory)
			console.log(groupId)
			if (currentCategory.groupId !== groupId) {
				continue;
			}
			const row = { 
				id: i, 
				category: currentCategory.name.categoryName, 
				assigned: currentCategory.assigned,
				activity: currentCategory.activity,
				available: currentCategory.available
			}
			res.push(row)
		}
		return res;
	}

	return (
		<>
			{generateDataGrid()}
		</>
	)
}