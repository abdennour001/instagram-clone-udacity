import React from "react";
import "./PostEdit.scss";

function PostEdit() {
    return (
        <div className="postEdit">
            <div className="postEdit__form">
                <h4 style={{ margin: "20px" }}>Edit Post</h4>
                <img
                    style={{ objectFit: "contain", width: "100%" }}
                    srcSet="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&oh=bd7ea8116b5637eceaabf63f94af30cf&oe=5F909418 640w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&oh=c87f38ebec5c78f4e2dbd5f647cdbda7&oe=5F900B54 750w,https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-15/e35/119423403_367915931262988_3468654964003685877_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=pp35bI9kfU8AX8J8V7w&_nc_tp=18&oh=956c4ec30d2786d93698d9b95124d4b9&oe=5F8FA6AE 1080w"
                    alt="Post image"
                />
                <textarea
                    className="newPost__captionInput"
                    name="caption"
                    id="caption"
                    cols="10"
                    rows="5"
                    placeholder="What's on your mind..."
                    style={{ margin: "20px" }}
                ></textarea>

                <a
                    className="newPost__postButton"
                    style={{ padding: "20px", paddingTop: "0" }}
                    href="#"
                >
                    Edit
                </a>
            </div>
        </div>
    );
}

export default PostEdit;
