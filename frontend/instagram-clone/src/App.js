import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css"

function App() {
    return (
        <div className="app">
            <div className="app__header">
                <Header />
            </div>
            <div className="app__main">
                <Main />
            </div>
        </div>
    );
}

export default App;
