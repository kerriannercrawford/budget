import LoginLayout from '../app/components/layouts/LoginLayout';
import Image from 'next/image';
import { Button, TextField, Grid, Alert } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
      setErrorMessage('Username or password missing');
      return;
    }
    try {
      setError(false)
      const res = await axios.post('/api/users/login', {username, password});
    } catch(e) {
      setError(true)
      setErrorMessage('Error while logging in. Please check username and/or password')
      return;
    }
  }

  const alert = (message: string) => {
    return <Alert severity='error'>{message}</Alert>
  }

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  }

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
      {error && alert(errorMessage)}
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