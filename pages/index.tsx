import AppLayout from '../app/components/layouts/AppLayout';
import ContentLayout from '../app/components/layouts/ContentLayout';
import { useSelector } from 'react-redux';
import Login from '../app/components/Login';
import Content from '../app/components/Content';
import Account from '../app/components/Accounts';

export default function Home() {
	const state = useSelector((state: any) => state);
  const { budget } = state;
  const renderPage = (view: string) => {
    switch (view) {
      case 'budget':
        return <Content />
      case 'allaccounts': 
        return <Account />
      case 'login': 
      default:
        return <Login />
      }
  }
  return (
    <>{renderPage(budget.view)}</>
  )
}

Home.getLayout = function getLayout(page: any) {
  return (
    <AppLayout>
			<ContentLayout>
      	{page}
			</ContentLayout>
    </AppLayout>
  )
}