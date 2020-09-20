import React from "react";
import "./MenuModal.scss";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/modalActions";

function MenuModal({ isOpened, toggleModal }) {
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
                        <button>Delete</button>
                    </div>
                    <div className="menuModal__item">
                        <button>Edit</button>
                    </div>

                    <div className="menuModal__item">
                        <button onClick={() => {toggleModal()}}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isOpened: state.modal.isOpened
});

export default connect(mapStateToProps, { toggleModal })(MenuModal);
