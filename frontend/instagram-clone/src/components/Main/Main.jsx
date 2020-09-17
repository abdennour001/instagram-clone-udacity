import React from "react";
import "./Main.css";
import UserInfo from "../UserInfo";
import Post from "../Post";

function Main() {
    return (
        <div className="main">
            <div className="main__feed">
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
            <div className="main__userInfo">
                <UserInfo></UserInfo>
                <br />
                <span className="main__copyright">
                    © 2020 Instagram from Facebook
                </span>
            </div>
        </div>
    );
}

export default Main;
