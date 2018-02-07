import React from 'react'
import Fret from './Fret'

const stringStyle = {
    margin: '0',
    height: '2rem',
    position: 'relative'
}

const steelStyle = {
    width: '100%',  
    height: '.25rem',
    backgroundColor: '#a8a8a8',
    position: 'absolute',
    border: '1px solid black',
    top: '50%',
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)'
}

const GuitarString = ({widths}) => {
    return (
        <div style={stringStyle}>
            <div style={steelStyle} />
            {widths.map((width, i) => {
                return (
                    <Fret index={i} width={width} />
                )
            })}
        </div>
    )
}

export default GuitarString
