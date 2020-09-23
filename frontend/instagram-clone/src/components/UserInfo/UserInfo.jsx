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
  
                    alt="Amokrane Abdennour"
                >
                </Avatar>
            </div>
            <div className="userInfo__username">
                <h4>User</h4>
                {/* <p>amokranabdennour@gmail.com</p> */}
            </div>
        </div>
    );
}

export default UserInfo;
