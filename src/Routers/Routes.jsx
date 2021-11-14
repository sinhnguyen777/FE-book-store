import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
<<<<<<< HEAD:src/Page/Site/Routers/Routes.jsx
import routes from './Pages';
=======
import Admin from '../Page/Admin/Admin';
import Footer from '../Page/Site/Layout/Footer/footer';
import Header from '../Page/Site/Layout/Header/header';
import pages from './Pages';
>>>>>>> 485265353e8806c4cbda12480b826b755e5e2d44:src/Routers/Routes.jsx

const renderRoutes = () => {
    return (
        <>
<<<<<<< HEAD:src/Page/Site/Routers/Routes.jsx
            <Switch>
                {/* chỗ import Header */}
                {routes.map((item) => {
=======
            <Switch basename="side">
                <Header />
                {pages.map((item) => {
>>>>>>> 485265353e8806c4cbda12480b826b755e5e2d44:src/Routers/Routes.jsx
                    return (
                        <Route
                            key={item.path}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}
                <Footer />
            </Switch>
        </>
    );
};

export default renderRoutes;
