import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import pages from './Pages';

const renderRoutes = () => {
    return (
        <>
            <Switch>
                {/* chỗ import Header */}

                {pages.map((item) => {
                    console.log(item);
                    return (
                        <Route
                            key={item.path}
                            path={item.path}
                            component={item.component}
                            exact={item.exact}
                        />
                    );
                })}

                {/* chỗ import Footer */}
            </Switch>
        </>
    );
};

export default renderRoutes;
