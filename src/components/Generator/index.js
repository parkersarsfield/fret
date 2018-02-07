import React from 'react'

const strings = [
    { number: 1, note: 'E' },
    { number: 2, note: 'B' },
    { number: 3, note: 'G' },
    { number: 4, note: 'D' },
    { number: 5, note: 'A' },
    { number: 6, note: 'E' },
] //strings in standard tuning

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const mods = ['', '', '#', 'b'] //# is sharp, b is flat

class Generator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: ''
        }

        this.getNote = this.getNote.bind(this)
        this.newNote = this.newNote.bind(this)
    }

    componentDidMount() {
        this.setState({note: this.getNote()})
    }

    getNote() {
        const noteInd = Math.random() * notes.length | 0
        const modInd = Math.random() * mods.length | 0
        const note = notes[noteInd] + '' + mods[modInd]

        return note
    }

    newNote() {
        const note = this.getNote()
        this.setState({ note })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.note}</h2>
                <button onClick={this.newNote}>New Note</button>
            </div>
        )
    }
}

export default Generator
