import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Burly Few Emu</title>
        <meta property="og:title" content="Burly Few Emu" />
      </Helmet>
    </div>
  )
}

export default Home
