import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(props: any) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser]: any = useState();

  const getAccounts = async (userId: string) => {
    const accounts = await axios.get(`/api/accounts/user/${userId}`);
    console.log(accounts);
  }

  const getCategories = async (userId: string) => {
    const categories = await axios.get(`/api/categories/user/${userId}`);
    console.log(categories);
  }

  const getGroups = async (userId: string) => {
    const groups = await axios.get(`/api/groups/user/${userId}`);
    console.log(groups);
  }

  const getPayees = async (userId: string) => {
    const payees = await axios.get(`/api/payees/user/${userId}`);
    console.log(payees);
  }

  const getTransactions = async (userId: string) => {
    const transactions = await axios.get(`/api/transactions/user/${userId}`);
    console.log(transactions);
  }

  const getUsers = async () => {
    const users = await axios.get(`/api/users/`);
    console.log(users);
  }

  const login = async () => {
    const userResult = await axios.post('/api/users/login', { username: 'smithjoseph', password: 'password' });
    if (userResult.status !== 200) {
      alert('Log in failed!')
    }
    setLoggedIn(true);
    setUser(userResult.data);
  }

  useEffect(() => {
    if (user) {
      const getStuff = async (user: any) => {
        await getAccounts(user._id);
        await getCategories(user._id);
        await getGroups(user._id);
        await getPayees(user._id);
        await getTransactions(user._id);
        await getUsers()
      }
      getStuff(user)
    }
  })

  return (
    <div>
      <h1>Good Enough 2</h1>
      <button onClick={login}>Log In</button>
      {loggedIn && (
        <div>
          <h2>Accounts</h2>
          <button></button>
          <h2>Categories</h2>
          <h2>Groups</h2>
          <h2>Payees</h2>
          <h2>Sessions</h2>
          <h2>Transactions</h2>
          <h2>Users</h2>
        </div>
      )}
    </div>
  )
}

export default App;