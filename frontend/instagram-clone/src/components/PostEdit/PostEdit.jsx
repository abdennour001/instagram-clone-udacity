import React, { useEffect, useState } from "react";
import "./PostEdit.scss";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { patchPost } from "../../api/posts-api";
import {
    createPost as addPost,
    removePost
} from "../../redux/actions/postsActions";

function PostEdit({ params, posts, auth, removePost, addPost }) {
    const [post, setPost] = useState();
    const [caption, setCaption] = useState("");

    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        setPost(posts.find(post => post.postId === id));
        setCaption(post?.caption);
    }, [post]);

    return (
        <div className="postEdit">
            <div className="postEdit__form">
                <h4 style={{ margin: "20px" }}>Edit Post</h4>
                <img
                    style={{ objectFit: "contain", width: "100%" }}
                    src={post?.photoUrl}
                    alt="Post"
                />
                <textarea
                    className="newPost__captionInput"
                    name="caption"
                    id="caption"
                    cols="10"
                    rows="5"
                    value={caption}
                    onChange={e => {
                        setCaption(e.target.value);
                    }}
                    placeholder="What's on your mind..."
                    style={{ margin: "20px" }}
                ></textarea>

                <a
                    className="newPost__postButton"
                    style={{ padding: "20px", paddingTop: "0" }}
                    onClick={e => {
                        e.preventDefault();
                        // TODO: api call to edit a post
                        patchPost(auth.getIdToken(), id, {
                            caption: caption
                        });

                        removePost(post.postId);
                        addPost({ ...post, caption: caption });
                        history.push("/");
                    }}
                >
                    Edit
                </a>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    auth: state.auth.auth
});

export default connect(mapStateToProps, { removePost, addPost })(PostEdit);
