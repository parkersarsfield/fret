import React from 'react'

const dotStyles = {
    backgroundColor: 'black',
    fontSize: '8rem',
    borderRadius: '100%',
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    zIndex: '99'
}

const FretDot = ({top, left}) => {
    return <div style={{...dotStyles, top:`${top}%`, left:`${left}%`}}></div>
}

export default FretDot
