import Container from '@mui/material/Container';
import Header from './Header';
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';

export default function Layout({children}: any) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={2}>
				<NavBar />
			</Grid>
			<Grid item xs={10}>
				<main>{children}</main>
			</Grid>
		</Grid>
	)
}