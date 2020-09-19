import React from "react";
import "./NewPost.scss";
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import Avatar from "@material-ui/core/Avatar"


function NewPost() {

    return (
        <div className="newPost">
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
                className="newPost__captionInput"
                name="caption"
                id="caption"
                cols="10"
                rows="5"
                placeholder="What's on your mind..."
            ></textarea>
            <div className="newPost__imageInput">
                <PhotoCameraRoundedIcon className="newPost__icon"></PhotoCameraRoundedIcon>
                <label for="upload-photo">Add an image</label>
                <input type="file" name="photo" id="upload-photo" />
            </div>
            <a className="newPost__postButton" href="#">
                Post
            </a>
        </div>
    );
}

export default NewPost;
