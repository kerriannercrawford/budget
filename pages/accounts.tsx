import AppLayout from '../components/layouts/AppLayout';
import AccountLayout from '../components/layouts/AccountLayout';

export default function Account() {
	return (
		<h2>Blah</h2>
	)
}

Account.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
      <AccountLayout>{page}</AccountLayout>
    </AppLayout>
  )
}