import Container from '@mui/material/Container';
import Header from './Header';
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';
import { Provider } from 'react-redux';
import store from '../../redux/store';

export default function Layout({children}: any) {
	return (
		<Provider store={store}>
			<Grid container spacing={2}>
				<Grid item xs={12} textAlign='center'>
					<Header />
				</Grid>
				<Grid item xs={2}>
					<Grid container direction='column' spacing={2}>
						<NavBar />
					</Grid>
				</Grid>
				<Grid item xs={10}>
					<main>{children}</main>
				</Grid>
			</Grid>
		</Provider>
	)
}