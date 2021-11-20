import Container from '@mui/material/Container';
import Header from './Header';
import NavBar from './NavBar';
import ContentLayout from './ContentLayout';
import Grid from '@mui/material/Grid';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import styles from '../../styles/AppLayout.module.css';

export default function AppLayout2({children}: any) {
	return (
		<Provider store={store}>
			<Grid container>
				<Grid item xs={1.75} className={styles.navBarContainer} height='100vh'><NavBar /></Grid>
				<Grid item xs={10.25} className={styles.outerGridContainer}>{children}</Grid>
			</Grid>
		</Provider>
	)
}