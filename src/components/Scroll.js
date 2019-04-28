import React from 'react';

const Scroll = (props) => {
    return (
        <div className="scrollable">
            {props.children}
        </div>
    )
}

export default Scroll;