import AppLayout from '../app/components/layouts/AppLayout';
import AccountLayout from '../app/components/layouts/AccountLayout';

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