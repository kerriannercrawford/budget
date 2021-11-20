import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Header() {
	const dispatch = useDispatch();
	const state = useSelector((state: any) => state);

	const generateUponLogin = () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '30%', marginLeft: '20px' }}>
					<ArrowBackIosNewIcon sx={{ marginRight: '10px' }} />
					<h2> november<br/>2021 </h2>
					<ArrowForwardIosIcon sx={{ marginLeft: '10px' }} />
				</div>
				<div style={{ backgroundColor: 'rgba(255,255,255, .2)', borderRadius: '7px', width: '200px', textAlign: 'center', boxShadow: '1px 1px 1px black' }}>
					<p style={{ fontSize: '1.2rem', marginBottom: '0', fontWeight: 'bolder' }}>$0.00</p>
					<p>All Money Assigned</p>
				</div>
			</div>
		)
	}

	return (
		<>{ state.user.loggedIn && generateUponLogin() }</>
	)
}