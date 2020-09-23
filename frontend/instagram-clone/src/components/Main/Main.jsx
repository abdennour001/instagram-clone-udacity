import React, { useEffect } from "react";
import "./Main.css";
import UserInfo from "../UserInfo";
import Post from "../Post";
import NewPost from "../NewPost";
import { connect } from "react-redux";
import { callAction } from "../../redux/actions/authActions";
import { fetchPosts } from "../../redux/actions/postsActions";
import { getPosts } from "../../api/posts-api";

function Main({ posts, fetchPosts, auth, callAction, loggedIn }) {
    useEffect(() => {
       setTimeout(() => {
        if (loggedIn === true) {
            if (posts.length === 0) {
                // TODO: api call to <g></g>et posts
                const fetchData = async () => {
                    try {
                        console.log(auth.getIdToken());
                        const posts = await getPosts(auth.getIdToken());
                        fetchPosts(posts);
                    } catch (e) {
                        alert(`Failed to fetch posts: ${e.message}`);
                    }
                };

                fetchData();
            }
        }
       }, 1000)
    }, []);

    return (
        <div className="main">
            <div className="main__feed">
                <NewPost></NewPost>
                <br />
                {posts.length !== 0 &&
                    posts.map(
                        ({
                            postId,
                            username,
                            userthumbnail,
                            photoUrl,
                            likes,
                            caption,
                            createdAt
                        }) => (
                            <Post
                                key={postId}
                                id={postId}
                                // username={username}
                                userthumbnail={userthumbnail}
                                postImage={photoUrl}
                                likes={likes}
                                caption={caption}
                                date={createdAt}
                            />
                        )
                    )}
            </div>
            <div className="main__userInfo">
                <UserInfo></UserInfo>
                <br />
                <a
                    className="main__signout"
                    href="#"
                    onClick={() => {
                        callAction("logout");
                    }}
                >
                    Sign out
                </a>
                <br />
                <span className="main__copyright">
                    © 2020 Instagram Clone from Udacity
                </span>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    auth: state.auth.auth,
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, { fetchPosts, callAction })(Main);
