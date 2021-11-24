
import Home from '../Page/Home/Home'
import ProductDetail from '../Page/ProductDetail/ProductDetail';

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
