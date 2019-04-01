import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={propic1} alt="" /></a>
                    <h1><strong>Tubby Black</strong>, listen...<br />
                    you can almost hear it.<br /></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
