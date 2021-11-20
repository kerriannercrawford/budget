import Container from '@mui/material/Container';
import Header from './Header';
import NavBar from './NavBar';
import Grid from '@mui/material/Grid';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import styles from '../../styles/ContentLayout.module.css';

export default function ContentLayout({children}: any) {
	return (
		<Provider store={store}>
			<Grid container>
				<Grid item xs={12} className={styles.headerContainer} height='12vh'><Header /></Grid>
				<Grid item xs={12} className={styles.contentContainer} height='88vh'>{children}</Grid>
			</Grid>
		</Provider>
	)
}