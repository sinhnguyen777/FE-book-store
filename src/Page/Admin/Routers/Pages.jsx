import Home from "../Page/Home/Home";
import CatalogPage from "../Page/Catalogs/Catalog"
import Product from "../Page/Products/product";
import Order from "../Page/order/oder";
import EditCata from "../Page/Catalogs/pages/editCata";
import Permission from "../Page/Permission/Permission";
import EditPermission from "../Page/Permission/pages/editPermission";
import Role from "../Page/Role/Role";
import Chapter from "../Page/Products/pages/Chapter";
import ContentChapter from "../Page/Products/pages/Chapter/pages/detail";


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
        path: '/admin/products/Listchapter/:id',
        component: Chapter,
        exact: true,
    },
    {
        path: '/admin/products/chapter/:id',
        component: ContentChapter,
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
    },
    {
        path: '/admin/role',
        component: Role,
    },
    {
        path: '/admin/role/edit/:id',
        component: EditPermission,
    }
    

];

export default routes;
