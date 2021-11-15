import AppLayout from '../app/components/layouts/AppLayout';
import BudgetLayout from '../app/components/layouts/BudgetLayout';
import Image from 'next/image';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <h1>Welcome to your budget</h1>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
      <BudgetLayout>{page}</BudgetLayout>
    </AppLayout>
  )
}