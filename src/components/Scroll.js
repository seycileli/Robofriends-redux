import React from "react";

//children
const Scroll = (props) => {
    return(
        <div style={{
            overflowY: 'scroll',
            border: '2px solid white',
            padding: 8,
            height: '600px'
        }}>
            {props.children}
        </div>
    )
} //closing braces

export default Scroll;
