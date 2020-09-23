import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import MenuModal from "./components/MenuModal";
import PostEdit from "./components/PostEdit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import { callAction } from "./redux/actions/authActions";
import Callback from "./components/Callback";

function App({ auth, loggedIn, callAction }) {
    return (
        <Router>
            <div className="app">
                <MenuModal />
                <div className="app__header">
                    {loggedIn && <Header />}
                </div>
                <div className="app__main">
                    <Switch>
                        <Route path="/post/:id/edit">
                            <PostEdit />
                        </Route>
                        <Route
                            path="/callback"
                            render={props => {
                                callAction("handleAuthentication");
                                return <Callback />;
                            }}
                        />
                        <Route exact path="/">
                            {loggedIn ? <Main /> : <Login />}
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

const mapStateToProps = state => ({
    auth: state.auth.auth,
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, { callAction })(App);
