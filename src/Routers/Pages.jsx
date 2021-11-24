import Home from '../Page/Site/Page/Home/Home';
import ProductDetail from '../Page/Site/Page/ProductDetail/ProductDetail';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/product-detail',
        component: ProductDetail,
        exact: true,
    }
];

export default routes;