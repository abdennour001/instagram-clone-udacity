import React from "react";
import "./Main.css";
import UserInfo from "../UserInfo";
import Post from "../Post";
import NewPost from "../NewPost";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";

function Main({ posts, addPosts }) {
    return (
        <div className="main">
            <div className="main__feed">
                <NewPost></NewPost>
                <br />
                {posts.length !== 0 &&
                    posts.map(
                        ({
                            username,
                            userthumbnail,
                            postImage,
                            likes,
                            caption,
                            date
                        }) => (
                            <Post
                                username={username}
                                userthumbnail={userthumbnail}
                                postImage={postImage}
                                likes={likes}
                                caption={caption}
                                date={date}
                            />
                        )
                    )}
                {/*
                <Post
                    username="comment_sense"
                    userthumbnail="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/12135221_1504026046590669_480390521_a.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=5w33ZzTD50QAX-hD5GW&oh=4261c373fc28038ec5d2933d9e24b141&oe=5F9165BB"
                    postImage="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&oh=bd7ea8116b5637eceaabf63f94af30cf&oe=5F909418 640w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&oh=c87f38ebec5c78f4e2dbd5f647cdbda7&oe=5F900B54 750w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&_nc_tp=18&oh=956c4ec30d2786d93698d9b95124d4b9&oe=5F8FA6AE 1080w"
                    likes="1,786"
                    caption="Credit -> • @oladipo_codes ...I wish to know how to code people often tell me.

                    The first question I mostly ask is what do you intend to do with your programming skills....I often ask this question so that I will know the programming language to tell them to learn. 💟"
                    date="1 day ago"
                ></Post> */}
            </div>
            <div className="main__userInfo">
                <UserInfo></UserInfo>
                <br />
                <a className="main__signout" href="#">
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
    posts: state.posts.posts
});

export default connect(mapStateToProps, { fecthPosts })(Main);
