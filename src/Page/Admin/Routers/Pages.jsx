import Home from "../Page/Home/Home";
import Cata from "../Page/Catalogs/Catalog"


const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    }, {
        path: '/cata',
        component: Cata,
        exact: true,
    }

];

export default routes;
