import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";

import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Spinner from "../spiner/Spinner";

// import Test from "../test/Test";

const Page404 = lazy(() => import('../pages/404'));
const MainPages = lazy(() => import('../pages/MainPages'));
const ComicPages = lazy(() => import('../pages/ComicPages'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const  App  = () => {

    return (
        <Router>
            <div className="app">
                {/* <TestComponent /> */}
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/marvel-started/">
                                <MainPages/>
                            </Route>
                            
                            <Route exact path="/marvel-started/comics">
                                <ComicPages/>
                            </Route>

                            <Route exact path="/comics/:id">
                                <SinglePage Component={SingleComicLayout} dataType='comic'/>
                            </Route>

                            <Route exact path="/characters/:id">
                                <SinglePage Component={SingleCharacterLayout} dataType='character'/>
                            </Route>

                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>

                {/* <Test></Test> */}

            </div>
        </Router>
    )
}

export default App;