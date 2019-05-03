import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import { Link } from "gatsby"

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Love, Me. Vol.2 (Prod.Mors)', description: <a href="https://soundcloud.com/tubby-black/love-me-vol-2" target="_blank">Listen Here</a>},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Virtuous Tw(o)o (Prod. Beatowski)', description: <a href="https://soundcloud.com/tubby-black/virtuous-tw-o-o" target="_blank">Listen Here</a>},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'End to End (Prod.Potsu)', description: <a href="https://soundcloud.com/tubby-black/end-to-end" target="_blank">Listen Here</a>},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Lovely Lives', description: <a href="https://soundcloud.com/tubby-black/lovely-lives" target="_blank">Listen Here</a>},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'You Feel? (Prod.30HertzBeats)', description: <a href="https://soundcloud.com/tubby-black/you-feel" target="_blank">Listen Here</a>},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Never Felt the Love', description: <a href="https://soundcloud.com/tubby-black/never-felt-the-loveprod-illuid-haller" target="_blank">Listen Here</a>}
];

class HomeIndex extends React.Component {

    constructor() {
        super();


        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Tubby Black.com"
        const siteDescription = "Pittsburgh rapper Tubby Black's Website"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Who is Tubby Black?</h2>
                        </header>
                        <p>I am simply a person who likes to make music. I have been playing many different instruments from a young age. Honestly my favortie thing about music is writing lyrics. Lyrics give you a chance to speak your mind and let people know what and how you feel, but it also gives you a chance to connect with other people. I am from Pittsburgh, PA and I am gonna make some dope music that will change the world.</p>
                        <ul className="actions">
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Music</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description}) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://soundcloud.com/tubby-black/tracks" target="_blank" className="button">All Music</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Hit Me Up</h2>
                        <p>If you need to get in touch with me send me a message below.</p>
                        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="row">
                            <div className="8u 12u$(small)">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>

                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Pittsburgh, PA<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        412-418-2267
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        tubbyblack14@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </form>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
