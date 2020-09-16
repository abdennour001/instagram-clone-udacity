import React from "react";
import "./Header.scss";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

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

function Header() {
    const classes = useStyles();

    return (
        <nav className="header">
            <img
                className="header__logo"
                src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
                alt="Instagram Logo"
            />
            <div className="header__l-search">
                <div className="header__search">
                    <SearchIcon className="header__searchIcon"></SearchIcon>
                    <input
                        className="header__searchInput"
                        type="text"
                        placeholder="Search"
                    />
                    <CancelIcon className="header__cancelIcon" />
                </div>
            </div>
            <div className="header__actions">
                <Avatar
                    className={classes.small}
                    src="https://scontent-mrs2-1.cdninstagram.com/v/t51.2885-19/s150x150/33640314_1888844138075124_6391859596507480064_n.jpg?_nc_ht=scontent-mrs2-1.cdninstagram.com&_nc_ohc=XH6v7IAk8EEAX-6xAA3&oh=c37a86c584c07cb0d568c75822669cab&oe=5F89E5CC"
                    alt="Amokrane Abdennour"
                >
                    Amokrane Abdennour
                </Avatar>
            </div>
        </nav>
    );
}

export default Header;
