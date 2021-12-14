import Home from "../page/InforPage/index";
import Order from "../page/Order/index";
import WishList from "../page/WishList/index";


const routes = [
    {
        path: '/account/',
        component: Home,
        exact: true,
    },
    {
        path: '/account/order',
        component: Order,
        exact: true,
    },
    {
        path: '/account/wish-list',
        component: WishList,
        exact: true,
    },
];

export default routes;
