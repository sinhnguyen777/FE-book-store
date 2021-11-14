import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import pages from './Pages';

const renderRoutes = () => {
    return (
        <>
            <Switch basename='/admin'>
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
            </Switch>
        </>
    );
};

export default renderRoutes;
