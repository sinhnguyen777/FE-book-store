import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Footer from '../Page/Site/Layout/Footer/footer';
import Header from '../Page/Site/Layout/Header/header';
import pages from './Pages';

const renderRoutes = () => {
    return (
        <>
            <Switch basename="side">
                <Header />
                {pages.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    );
                })}
                <Footer />
            </Switch>
        </>
    );
};

export default renderRoutes;