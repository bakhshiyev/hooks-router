import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
    // console.log('Button');
    return (
        <button onClick={props.onClick} type={props.type || 'button'} className={`${props.className} ${styles.additional}`}>
            {props.children + props.operations[0]}
        </button>
    );
};

export default React.memo(Button);