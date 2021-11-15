import LoginLayout from '../app/components/layouts/LoginLayout';
import { Button, TextField, Grid } from '@mui/material'
import { useState } from 'react';
import styles from '../styles/Login.module.css';

export default function CreateAccount() {
  const [login, setLogin] = useState();
  return (
    <Grid container direction='column' alignContent='center' alignItems='center' spacing={1}>
      <Grid item>
        <TextField className={styles.loginInput} variant='outlined' label='Username' required />
      </Grid>
      <Grid item>
        <TextField className={styles.loginInput} variant='outlined' label='Password' required />
      </Grid>
      <Grid item>
		  	<TextField className={styles.loginInput} variant='outlined' label='First Name' required />
      </Grid>
      <Grid item>
			  <TextField className={styles.loginInput} variant='outlined' label='Last Name' required />
      </Grid>
      <Grid item>
		  	<TextField className={styles.loginInput} variant='outlined' label='Email' required />
      </Grid>
      <Grid item>
			  <TextField className={styles.loginInput} variant='outlined' label='Name of Budget' required />
      </Grid>
      <Grid item>
        <Button href='/budget'>Create</Button>
      </Grid>
    </Grid>
  )
}

CreateAccount.getLayout = function getLayout(page: any) {
  return (
    <LoginLayout>
      {page}
    </LoginLayout>
  )
}