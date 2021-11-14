import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import routes from './Pages';

const renderRoutes = () => {
    return (
        <>
            <Switch>
                {/* chỗ import Header */}
                {routes.map((item) => {
                    return (
                        <Route
                            key={item.path}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        />
                    );
                })}

                {/* chỗ import Footer */}
            </Switch>
        </>
    );
};

export default renderRoutes;
