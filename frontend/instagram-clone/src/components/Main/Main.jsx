import React from "react";
import "./Main.css";
import UserInfo from "../UserInfo";
import Post from "../Post";
import NewPost from "../NewPost";

function Main() {
    return (
        <div className="main">
            <div className="main__feed">
                <NewPost></NewPost>
                <br />
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
            <div className="main__userInfo">
                <UserInfo></UserInfo>
                <br />
                <a className="main__signout" href="#">
                    Sign out
                </a>
                <br/>
                <span className="main__copyright">
                    © 2020 Instagram from Facebook
                </span>
            </div>
        </div>
    );
}

export default Main;
