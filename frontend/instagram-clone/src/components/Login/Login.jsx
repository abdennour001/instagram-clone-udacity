import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { callAction } from "../../redux/actions/authActions";

function Login({ auth, callAction }) {
    return (
        <div className="login">
            <img
                className="login__logo"
                src="https://www.vectorlogo.zone/logos/instagram/instagram-wordmark.svg"
                alt="Instagram Logo"
            />

            <a
                className="newPost__postButton"
                style={{ marginRight: "auto", fontSize: "18px" }}
                onClick={() => {
                    auth.login();
                }}
            >
                Login To Instagram
            </a>
        </div>
    );
}

const mapStateToProps = state => ({
    auth: state.auth.auth
});

export default connect(mapStateToProps, { callAction })(Login);
