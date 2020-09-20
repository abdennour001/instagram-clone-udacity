import React from "react";
import "./MenuModal.scss";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/modalActions";
import { useHistory } from "react-router-dom";

function MenuModal({ isOpened, selectedPost, toggleModal }) {

    let history = useHistory();

    const handleOutsideClick = event => {
        event.preventDefault();
        if (event.target === event.currentTarget) {
            toggleModal();
        }
    };

    return (
        <div
            className={`menuModal${isOpened ? "" : "-hidden"}`}
            onClick={handleOutsideClick}
        >
            <div className="menuModal__menu">
                <div className="menuModal__list">
                    <div className="menuModal__item-danger">
                        <button onClick={
                            (e) => {
                                e.preventDefault()
                                // TODO: api call to delete a post
                               
                                toggleModal(null);
                            }
                        }>Delete</button>
                    </div>
                    <div className="menuModal__item">
                        <button onClick={(e) => {
                            e.preventDefault()
                            history.push(`/post/${selectedPost}/edit`)
                            toggleModal(null)
                        }}>Edit</button>
                    </div>

                    <div className="menuModal__item">
                        <button onClick={() => {toggleModal(null)}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isOpened: state.modal.isOpened,
    selectedPost: state.modal.selectedPost,
});

export default connect(mapStateToProps, { toggleModal })(MenuModal);
