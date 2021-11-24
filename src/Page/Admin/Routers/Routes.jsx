import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './Pages';
const renderRoutes = () => {
    return (
        <>
            <Switch >
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
