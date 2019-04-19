import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from "gatsby"

import success from '../assets/images/success.jpg'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Tubby Black.com/success</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Thanks for hitting me up</h1>
          </header>
          <span className="image main">
            <img src={success} alt="" />
          </span>
          <p>I'll get back to you soon!</p>
          <a href="index.js" className="button">Go Back</a>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
