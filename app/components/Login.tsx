import { useDispatch, useSelector } from "react-redux"
import { Button, TextField, Grid, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { updateUsername, updatePassword } from '../redux/slices/userSlice';
import { setError, resetError } from '../redux/slices/infoSlice';
import { loginDispatchers } from '../util/dispatchers';

export default function Login() {
  const state = useSelector((state: any) => state);
  const { user, info } = state;
  const dispatch = useDispatch();

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
      loginDispatchers(dispatch, userResponse.data);
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