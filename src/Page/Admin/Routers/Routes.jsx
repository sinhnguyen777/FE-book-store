// import React from 'react';
// import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
// import Header from '@layout/Header/Header';
// import pages from './Pages';

// const renderRoutes = () => {
//     return (
//         <>
//             <Switch>
//                 {/* chỗ import Header */}

//                 <Route exact path="/">
//                     <Redirect to="/content-management" />
//                 </Route>
//                 {pages.map((item) => {
//                     return (
//                         <Route
//                             key={item.path}
//                             exact={item.exact}
//                             path={item.path}
//                             component={item.component}
//                         />
//                     );
//                 })}
//                 {/* chỗ import Footer */}

//             </Switch>
//         </>
//     );
// };

// export default renderRoutes;
