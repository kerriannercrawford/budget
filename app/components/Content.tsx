import Grid from '@mui/material/Grid';
import Budget from './Budget';
import InfoPanel from './InfoPanel';

export default function Context() {
	return <Grid container>
		<Grid item xs={8} height='88vh'><Budget/></Grid>
		<Grid item xs={4} height='88vh' style={{ backgroundColor: '#262626', borderLeft: '2px solid #606060' }}><InfoPanel/></Grid>
	</Grid>
}