import AppHeader from "../appHeader/AppHeader";

import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ComicPages, MainPages, Page404, SingleComicPage} from "../pages";

import Test from "../test/Test";

const  App  = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <Router>
            <div className="app">
                {/* <TestComponent /> */}
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/marvel-started/">
                            <MainPages/>
                        </Route>
                        
                        <Route exact path="/marvel-started/comics">
                            <ComicPages/>
                        </Route>

                        <Route exact path="/comics/:comicId">
                            <SingleComicPage/>
                        </Route>

                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>

                {/* <Test></Test> */}
            </div>
        </Router>
    )
}

export default App;