import React from 'react'
//import FretDot from 'fret'
const genStyle = (width) => {
    return {
        backgroundColor: '#c4a378',
        width: `${width}%`,
        height: '2rem',
        display: 'inline-block',
        borderRight: '2px solid black',
    }
}

const contentStyle = {
    color: 'black',
    fontSize: '3rem',
    position: 'absolute'
}


const Fret = ({index, width}) => {
    return (
        <div style={genStyle(width)}>
            <div style={contentStyle}>{' '}</div>
        </div>
    )
}

export default Fret
