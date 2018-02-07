import React from 'react'

import Fret from './Fret'
import GuitarString from './GuitarString'
import FretDot from './FretDot'

const containerStyle = {
    backgroundColor: 'white',
    width: '100%',
    margin: ' 2rem 0 0 0 ',
    position: 'relative',
}

const FRET_COUNT = 12

const r = 1 / 1.06
const start = (100 * (1 - r)) / (1 - r ** FRET_COUNT)
let widths = [start]

for (let i = 1; i < FRET_COUNT; i++) {
    widths.push(widths[i-1] / 1.06)
}



const Fretboard = () => {
    return (
        <div id="fretboard" style={containerStyle}>
            <GuitarString widths={widths} note={3}/>
            <GuitarString widths={widths} />
            <GuitarString widths={widths} />
            <GuitarString widths={widths} />
            <GuitarString widths={widths} />
            <GuitarString widths={widths} />
            <FretDot top={45} left={25}/>
            <FretDot top={45} left={44}/>
            <FretDot top={45} left={61}/>
            <FretDot top={45} left={75.75}/>
            <FretDot top={28} left={95}/>
            <FretDot top={61} left={95}/>
        </div>
    )
}

export default Fretboard
