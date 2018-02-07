import React from 'react'
import Link from 'gatsby-link'

//color pallet 
// #f9870b
// #482418
// #c4a378
// #f7eee5
// #a8a8a8
const Header = () => (
  <div
    style={{
      background: '#f9870b',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          FretString
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
