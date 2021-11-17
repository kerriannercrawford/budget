import AppLayout from '../app/components/layouts/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import Budget from '../app/components/Budget';
import Accounts from '../app/components/Accounts';
import Image from 'next/image';

export default function Home() {
  const state = useSelector((state: any) => state);
  console.log(state)
  const { user, accounts, categories, groups, payees, transactions } = state;
  const render = () => {
    switch (state.budget.view) {
      case 'budget': 
        return <Budget />
      case 'accounts': 
        return <Accounts />
    }
  }
  return (
    <>{render()}</>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
     {page}
    </AppLayout>
  )
}