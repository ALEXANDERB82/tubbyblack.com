import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import success from '../assets/images/success.jpg'

const Success = props => (
  <Layout>
    <Helmet>
      <title>Tubby Black.com</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Thanks for htting me up</h1>
          </header>
          <span className="image main">
            <img src={success} alt="" />
          </span>
          <p>I'll get back to you soon!</p>
          <li><a href="#" className="button">Go Back</a></li>
        </div>
      </section>
    </div>
  </Layout>
)

export default Success
