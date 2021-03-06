import Home from "../Page/Home/Home";
import CatalogPage from "../Page/Catalogs/Catalog"
import Product from "../Page/Products/product";
import Order from "../Page/order/oder";
import EditCata from "../Page/Catalogs/pages/editCata";
import Permission from "../Page/Permission/Permission";
import EditPermission from "../Page/Permission/pages/editPermission";
import Role from "../Page/Role/Role";
import Vip from "../Page/Vip/Vip";
import EditVip from "../Page/Vip/pages/editVip";
import Chapter from "../Page/Products/pages/Chapter";
import ContentChapter from "../Page/Products/pages/Chapter/pages/detail";
import EditProducts from "../Page/Products/pages/EditProducts";
import Member from "../Page/Member";
import User from "../Page/User/User";
import ProductSelling from "../Page/ProductSelling/ProductSelling";
import Coupon from "../Page/Coupon/Coupon";
import EditCoupon from "../Page/Coupon/pages/editCoupon/EditCoupon";
import UserTop from "../Page/User/Components/UserTop";



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
        path: '/admin/products/edit/:id',
        component: EditProducts,
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
        path: '/admin/Member',
        component: Member,
    },
    {
        path: '/admin/vip',
        component: Vip,
        exact: true,
    },
    {
        path: '/admin/vip/edit/:id',
        component: EditVip,
    }, 
    {
        path: '/admin/user',
        component: User,
        exact: true,
    },
    {
        path: '/admin/user-top',
        component: UserTop,
        exact: true,
    },
    {
        path: '/admin/best-product',
        component: ProductSelling,
        exact: true,
    },
    {
        path: '/admin/coupon',
        component: Coupon,
        exact: true,
    },
    {
        path: '/admin/coupon/edit/:id',
        component: EditCoupon,
    },
    

];

export default routes;
