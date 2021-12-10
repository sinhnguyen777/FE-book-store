import Cart from '../Page/Site/Page/Cart/Cart';
import Home from '../Page/Site/Page/Home/Home';
import ProductCategory from '../Page/Site/Page/ListProduct/Components/ProductCategory';
import ListProduct from '../Page/Site/Page/ListProduct/ListProduct';
import ProductDetail from '../Page/Site/Page/ProductDetail/index.productDetail';
import Option from '../Page/Site/Page/Option/Option';
import About from '../Page/Site/Page/About/About';
import Event from '../Page/Site/Page/Event/Event';
import Readbook from '../Page/Site/Page/Readbook/Readbook';
import Checkout from '../Page/Site/Page/Checkout/index.Checkout';
import Account from '../Page/Site/Page/Account/Account';
import Login from '../Page/Site/Page/Login/Login';
import OrderDetail from '../Page/Site/Page/OrderDetail/OrderDetail';

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
        path: '/product-detail/:slug',
        component: ProductDetail,
        exact: true,
    },
    {
        path: '/read-book/:id',
        component: Readbook,
        exact: true,
    },
    {
        path: '/product-category/:id',
        component: ProductCategory,
        exact: true,
    },
    {
        path: '/cart',
        component: Cart,
        exact: true,
    },
    {
        path: '/checkout',
        component: Checkout,
        exact: true,
    },
    {
        path: '/option',
        component: Option,
        exact: true,
    },
    {
        path: '/page',
        component: About,
        exact: true,
    },
    {
        path: '/event',
        component: Event,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/account',
        component: Account,
        exact: true,
    },
    {
        path: '/order-detail',
        component: OrderDetail,
        exact: true,
    },
];

export default routes;