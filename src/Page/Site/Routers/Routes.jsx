import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Footer from '../Layout/Footer/footer';
import Header from '../Layout/Header/header';
import pages from './Pages';

const renderRoutes = () => {
    return (
        <>
            <Switch>
                <Header/>
                {pages.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}

                <Footer/>
            </Switch>
        </>
    );
};

export default renderRoutes;
