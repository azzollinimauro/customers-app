import React from 'react';
import AppHeader from './AppHeader';
import PropTypes from 'prop-types';
import './../index.css';

const AppFrame = ({header, body}) => {
    return (
        <div>
            <div className="app-frame">
            <AppHeader title={header}></AppHeader>
            <div>{body}</div><br></br>
            <div>Aplicacion Simple de Ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header:PropTypes.string.isRequired,
    body:PropTypes.element.isRequired,
};

export default AppFrame;