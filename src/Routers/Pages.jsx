
import Home from '../Page/Site/Page/Home/Home';
import Demo from '../Page/Site/Page/ListProduct/index';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/demo',
        component: Demo,
        exact: true,
    }
];

export default routes;
