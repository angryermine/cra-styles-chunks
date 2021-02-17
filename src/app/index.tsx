import React, {lazy, Suspense} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

import './index.scss';

const FooPage = lazy(() => import(/* webpackChunkName: "foo" */ 'pages/foo'));
const BarPage = lazy(() => import(/* webpackChunkName: "bar" */ 'pages/bar'));
const FooCssPage = lazy(() => import(/* webpackChunkName: "foo-css" */ 'pages/foo-css'));
const BarCssPage = lazy(() => import(/* webpackChunkName: "bar-css" */ 'pages/bar-css'));

export function App() {
    return (
        <BrowserRouter>
            <nav className="App__nav">
                <NavLink to="/foo">Foo</NavLink>
                <NavLink to="/bar">Bar</NavLink>
                <NavLink to="/foo-css">Foo (css)</NavLink>
                <NavLink to="/bar-css">Bar (css)</NavLink>
            </nav>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route path="/foo" render={() => <FooPage />} exact />
                    <Route path="/bar" render={() => <BarPage />} exact />
                    <Route path="/foo-css" render={() => <FooCssPage />} exact />
                    <Route path="/bar-css" render={() => <BarCssPage />} exact />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
