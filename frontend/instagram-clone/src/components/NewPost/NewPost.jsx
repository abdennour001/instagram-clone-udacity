import React, { useState } from "react";
import "./NewPost.scss";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import Avatar from "@material-ui/core/Avatar";
import { createPost, getUploadUrl, uploadFile } from "../../api/posts-api";
import { connect } from "react-redux";

function NewPost({ auth }) {
    const [caption, setCaption] = useState("");
    const [photo, setPhoto] = useState(undefined);

    const onPostCreate = async event => {
        event.preventDefault();
        try {
            const newPost = await createPost(auth.getIdToken(), {
                caption: caption
            });

            const uploadUrl = await getUploadUrl(
                auth.getIdToken(),
                newPost.postId
            );
            await uploadFile(uploadUrl, photo);
            // this.setState({
            //     todos: [...this.state.todos, newTodo],
            //     newTodoName: ""
            // });
        } catch {
            alert("Post creation failed");
        }
    };

    return (
        <form method="post" className="newPost">
            <div className="newPost__title">
                <Avatar
                    src="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/33640314_1888844138075124_6391859596507480064_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=XH6v7IAk8EEAX-6xAA3&oh=c37a86c584c07cb0d568c75822669cab&oe=5F89E5CC"
                    alt="Amokrane Abdennour"
                >
                    A
                </Avatar>
                <h4>Post Something</h4>
            </div>
            <textarea
                value={caption}
                onChange={e => {
                    setCaption(e.target.value);
                }}
                className="newPost__captionInput"
                name="caption"
                id="caption"
                cols="10"
                rows="5"
                placeholder="What's on your mind..."
                required
            ></textarea>
            <div className="newPost__imageInput">
                <PhotoCameraRoundedIcon className="newPost__icon"></PhotoCameraRoundedIcon>
                <label for="upload-photo">Add an image</label>
                <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    id="upload-photo"
                    required
                    onChange={e => {
                        setPhoto(e.target.files[0]);
                        console.log(photo);
                    }}
                />
            </div>
            <button
                type="submit"
                className="newPost__postButton"
                href="#"
                onClick={e => {
                    e.preventDefault();
                    onPostCreate(e);
                }}
            >
                Post
            </button>
        </form>
    );
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    auth: state.auth.auth
});

export default connect(mapStateToProps)(NewPost);
