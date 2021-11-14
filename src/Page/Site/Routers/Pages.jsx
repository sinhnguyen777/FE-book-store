
import Home from '../Page/Home/index.home';
import Client from '../Page/Clients/index.client';

function name(params) {
    
}

const routes = [
    {
        path: '/client',
        component: Client,
        exact: true
    },
    {
        path: '/',
        component: Home,
        exact: true,
    }

    
];


export default routes;
