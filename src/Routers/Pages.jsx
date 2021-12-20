import About from "../Page/Site/Page/About/About";
import InforPage from "../Page/Site/Page/Account";
import Cart from "../Page/Site/Page/Cart/Cart";
import Checkout from "../Page/Site/Page/Checkout/index.Checkout";
import Event from "../Page/Site/Page/Event/Event";
import Home from "../Page/Site/Page/Home/Home";
import ProductCategory from "../Page/Site/Page/ListProduct/Components/ProductCategory";
import ListProduct from "../Page/Site/Page/ListProduct/ListProduct";
import ConfirmRegister from "../Page/Site/Page/Login/Confirm";
import ConfirmOrder from "../Page/Site/Page/OrderDetail/Confirm";
import Login from "../Page/Site/Page/Login/Login";
import Option from "../Page/Site/Page/Option/Option";
import OrderDetail from "../Page/Site/Page/OrderDetail/OrderDetail";
import ProductDetail from "../Page/Site/Page/ProductDetail/index.productDetail";
import Readbook from "../Page/Site/Page/Readbook/Readbook";
import Search from "../Page/Site/Page/Search/Search";
import SearchAuthor from "../Page/Site/Page/ListProduct/Components/SearchAuthor";
import ProductWait from "../Page/Site/Page/ProductWait/Event";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/shop",
    component: ListProduct,
    exact: true,
  },
  {
    path: "/product-detail/:slug",
    component: ProductDetail,
    exact: true,
  },
  {
    path: "/product-wait/:slug",
    component: ProductWait,
    exact: true,
  },
  {
    path: "/read-book/:id",
    component: Readbook,
    exact: true,
  },
  {
    path: "/product-category/:id",
    component: ProductCategory,
    exact: true,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/checkout",
    component: Checkout,
    exact: true,
  },
  {
    path: "/option",
    component: Option,
    exact: true,
  },
  {
    path: "/page",
    component: About,
    exact: true,
  },
  {
    path: "/event",
    component: Event,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/account",
    component: InforPage,
    exact: false,
  },
  {
    path: "/order-detail/:id",
    component: OrderDetail,
    exact: true,
  },
  {
    path: "/confirm/:token",
    component: ConfirmRegister,
    exact: false,
  },
  {
    path: "/order/confirm/:token",
    component: ConfirmOrder,
    exact: false,
  },
  {
    path: "/search/:values",
    component: Search,
    exact: false,
  },
  {
    path: "/search-author/:values",
    component: SearchAuthor,
    exact: false,
  },
];

export default routes;
