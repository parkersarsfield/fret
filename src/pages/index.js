import React from 'react'
import Link from 'gatsby-link'

import Fretboard from '../components/Fretboard'
import Generator from '../components/Generator'

const IndexPage = () => (
  <div>
    <h1>Fretboard Trainer</h1>
    <Generator />
    <Fretboard />
  </div>
)

export default IndexPage
