import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import MenuModal from "./components/MenuModal";
import PostEdit from "./components/PostEdit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <MenuModal />
                <div className="app__header">
                    <Header />
                </div>
                <div className="app__main">
                    <Switch>
                        <Route path="/post/:id/edit">
                            <PostEdit />
                        </Route>
                        <Route exact path="/">
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
