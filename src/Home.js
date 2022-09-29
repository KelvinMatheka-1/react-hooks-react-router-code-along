
import React from 'react'
import About from './About'
import Login from './Login'
import Navbar from './NavLinks'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home!</h1>
      <About />
      <Login />
    </div>
  )
}

export default Home