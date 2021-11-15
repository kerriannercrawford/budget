import Grid from '@mui/material/Grid';
import Header from './Header';

export default function LoginLayout({children}: any) {
	return (
		<Grid
			container
			spacing={2}
			direction='column'
			alignContent='center'
		>
			<Grid item alignSelf='center' xs={12}>
				<Header />
			</Grid>
				{children}
		</Grid>
	)
}