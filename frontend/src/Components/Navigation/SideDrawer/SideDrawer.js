import React from 'react';
import ReactDOM from 'react-dom';

const SideDrawer = (props) => {
   const  content = (
        <aside className='side-drawer' onClick={props.onClick}>
            {props.children}
        </aside>
    )
    return ReactDOM.createPortal(content,document.getElementById('side-drawer'));
}

export default SideDrawer;
