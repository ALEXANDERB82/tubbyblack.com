import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <p>Social Media</p>
                    </ul>
                    <ul className="copyright">
                        <li></li><li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
