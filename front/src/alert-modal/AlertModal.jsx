import React from 'react';


// Currently, this modal window isn't 100% user friendly because they are forced to hit cancel any time there is a popup
// Eventually, this can be refactored to have a set timeout function (possibly) that will automatically call the userHasCanceled
// function for them to close the modal window.
// We could also create a distinction between an error message that may require the user to hit cancel, but alerts like when 
// adding or removing articles have a timeout function that gets called after a certain amount of time.
const AlertModal = (props) => {
    if(props.alertModalDisplay) {
        return (
            // For now, this modal can use the other modal css, but eventually some things will need to change in case
            // this modal needs to appear on top of the other modal windows
            <div className="modal">
                <div className="form-content">
                    <p>{props.alertMessage}</p>
                    <button name="alertModalDisplay" onClick={props.userHasCanceled}>Cancel</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="modal"></div>
        )
    }
}

export default AlertModal;