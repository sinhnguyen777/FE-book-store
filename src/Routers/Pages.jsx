import Cart from '../Page/Site/Page/Cart/Cart';
import Home from '../Page/Site/Page/Home/Home';
import ListProduct from '../Page/Site/Page/ListProduct/ListProduct';
import ProductDetail from '../Page/Site/Page/ProductDetail/index.productDetail';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/shop',
        component: ListProduct,
        exact: true,
    },
    {
        path: '/product-detail',
        component: ProductDetail,
        exact: true,
    },
    {
        path: '/cart',
        component: Cart,
        exact: true,
    },
];

export default routes;