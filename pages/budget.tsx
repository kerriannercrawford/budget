import AppLayout from '../app/components/layouts/AppLayout';
import BudgetLayout from '../app/components/layouts/BudgetLayout';
import Image from 'next/image';
import Container from '@mui/material/Container';
import axios from 'axios';

export default function Home({ user }: any) {
  return (
    <h1>Welcome to your budget, {user.firstName}</h1>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
      <BudgetLayout>{page}</BudgetLayout>
    </AppLayout>
  )
}

Home.getInitialProps = async ({ query }: any) => {
  const { userId } = query;
  const response = await axios.get(`/api/users/${userId}`);
  console.log(response.data)
  return { user: response.data };
}