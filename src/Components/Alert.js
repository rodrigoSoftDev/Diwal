import React from 'react';

const Alert = ({ type, show, message, className }) => {
    const alertTypes = {
        error: "danger",
        warning: "warning",
        success: "success"
    };

    return show && <div className={`alert alert-${alertTypes[type]} ${className}`} role="alert"> {message} </div>
}
    


export default Alert;