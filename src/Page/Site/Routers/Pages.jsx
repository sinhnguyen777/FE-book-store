
import Home from '../Page/Home/Home'
import ListProduct from '../Page/ListProduct/ListProduct';
import ProductDetail from '../Page/ProductDetail/ProductDetail';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/product',
        component: ListProduct,
        exact: true,
    },
    {
        path: '/product-detail',
        component: ProductDetail,
        exact: true,
    }
];


export default routes;
