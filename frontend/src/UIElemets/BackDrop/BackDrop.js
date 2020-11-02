import React from 'react';
import ReactDOM from 'react-dom';
import './BackDrop.css';

const BackDrop = (props) => {
    const content = <div className='back-drop' onClick={props.onClick}></div>
    return ReactDOM.createPortal(content,document.getElementById('back-drop-hook'))
}

export default BackDrop;
