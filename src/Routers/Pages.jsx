
import Home from '../Page/Site/Page/Home/Home';
import Demo from '../Page/Site/Page/ListProduct/index.listproduct';
import Clients from '../Page/Site/Page/Clients/index.client'
import LoadMoreList from '../Page/Site/Page/test/index.test'
import Account from '../Page/Site/Page/Accounts/index.accounts';


const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/client',
        component: Clients,
        exact: true
    },
    {
        path: '/demo',
        component: Demo,
        exact: true,
    },
    {
        path: '/login',
        component: Account,
        exact: true,
    },
    
];

export default routes;
