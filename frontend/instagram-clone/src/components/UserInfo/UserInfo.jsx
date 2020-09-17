import React from "react";
import "./UserInfo.scss";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

function UserInfo() {
    const classes = useStyles();

    return (
        <div className="userInfo">
            <div className="userInfo__avatar">
                <Avatar
                    className={classes.large}
                    src="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/33640314_1888844138075124_6391859596507480064_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=XH6v7IAk8EEAX-6xAA3&oh=c37a86c584c07cb0d568c75822669cab&oe=5F89E5CC"
                    alt="Amokrane Abdennour"
                >
                    Amokrane Abdennour
                </Avatar>
            </div>
            <div className="userInfo__username">
                <h4>amokrane_abdennour</h4>
                <p>amokranabdennour@gmail.com</p>
            </div>
        </div>
    );
}

export default UserInfo;
