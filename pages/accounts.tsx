import AppLayout from '../app/components/layouts/AppLayout';
import AccountLayout from '../app/components/layouts/AccountLayout';
import { useSelector, useDispatch } from 'react-redux';

export default function Account() {
  const state = useSelector((state: any) => state)
  console.log(state)
  const accounts = state.accounts.accounts;
  const displayAccounts = () => {
    const arr = [];
    accounts.forEach((account: any) => {
      arr.push(<h3>{JSON.stringify(account)}</h3>)
    })
  }
	return (
		<>
    <h2>Your accounts</h2>
    {displayAccounts()}
    </>
	)
}

Account.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
      <AccountLayout>{page}</AccountLayout>
    </AppLayout>
  )
}