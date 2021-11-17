import LoginLayout from '../app/components/layouts/LoginLayout';
import Image from 'next/image';
import { Button, TextField, Grid, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import { login, updateUsername, updatePassword } from '../app/redux/slices/userSlice';
import { setDate } from '../app/redux/slices/budgetSlice';
import { setError, resetError } from '../app/redux/slices/infoSlice';
import { setAccounts } from '../app/redux/slices/accountsSlice';
import { setCategories } from '../app/redux/slices/categoriesSlice';
import { setGroups } from '../app/redux/slices/groupsSlice';
import { setPayees } from '../app/redux/slices/payeesSlice';
import { setTransactions } from '../app/redux/slices/transactionsSlice';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const state = useSelector((state: any) => state);
  const { user, info } = state;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const { username, password } = user;
    if (!username || !password) {
      dispatch(setError('Error: Password and/or username is missing'));
      return;
    }
    dispatch(resetError())
    let userResponse;
    try {
      userResponse = await axios.post('/api/users/login', {username, password});
      const accounts = await axios.get(`/api/accounts/user/${userResponse.data._id}`);
      const categories = await axios.get(`/api/categories/user/${userResponse.data._id}`);
      const groups = await axios.get(`/api/groups/user/${userResponse.data._id}`);
      const payees = await axios.get(`/api/payees/user/${userResponse.data._id}`);
      const transactions = await axios.get(`/api/transactions/user/${userResponse.data._id}`);
      const date = new Date;
      setLoggedIn(true);
      dispatch(login(userResponse.data));
      dispatch(setDate())
      dispatch(setAccounts(accounts.data));
      dispatch(setCategories(categories.data));
      dispatch(setGroups(groups.data));
      dispatch(setPayees(payees.data));
      dispatch(setTransactions(transactions.data));
    } catch(e) {
      dispatch(setError(e.message));
      return;
    }
  }

  const alert = (message: string) => {
    return <Alert severity='error'>{message}</Alert>
  }

  const handleUsernameChange = (e: any) => {
    dispatch(updateUsername(e.target.value));
  }

  const handlePasswordChange = (e: any) => {
    dispatch(updatePassword(e.target.value));
  }

  useEffect(() => {
    if (loggedIn && user) {
      router.push('/budget')
    }
  })

  return (
    <Grid container direction='column' alignContent='center' alignItems='center' spacing={1}>
      <Grid item>
        <TextField variant='outlined' label='Username' onChange={handleUsernameChange} required />
      </Grid>
      <Grid item>
        <TextField variant='outlined' label='Password' onChange={handlePasswordChange} required /><br />
      </Grid>
      <Grid item>
        <Button onClick={handleLogin}>Log in</Button>
      </Grid>
      {info.error && alert(info.errorMessage)}
      <Grid item>
        <Button href='/create'>Create Account</Button>
      </Grid>
    </Grid>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <LoginLayout>
      {page}
    </LoginLayout>
  )
}

