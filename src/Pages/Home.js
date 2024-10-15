import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url('/assets/banner.jpeg')` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
