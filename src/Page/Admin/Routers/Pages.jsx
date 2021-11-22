import Home from "../Page/Home/Home";
import CatalogPage from "../Page/Catalogs/Catalog"
import Product from "../Page/Products/product";
import Order from "../Page/order/oder";
import EditCata from "../Page/Catalogs/pages/editCata";
import Permission from "../Page/Permission/Permission";
import EditPermission from "../Page/Permission/pages/editPermission";


const routes = [
    {
        path: '/admin/',
        component: Home,
        exact: true,
    },
    {
        path: '/admin/cata',
        component:CatalogPage,
        exact: true,
    },
    {
        path: '/admin/cata/edit/:id',
        component: EditCata,
    },
    {
        path: '/admin/products',
        component: Product,
        exact: true,
    },
    {
        path: '/admin/permission',
        component: Permission,
        exact: true,
    },
    {
        path: '/admin/permission/edit/:id',
        component: EditPermission,
    },
    {
        path: '/admin/order',
        component: Order,
        exact: true,
    }
    

];

export default routes;
