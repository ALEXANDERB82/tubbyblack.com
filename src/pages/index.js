import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import { PlayButton, Progress, Icons, Timer, VolumeControl, Cover} from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const clientId = 'wBZbydoVnaCcBic8oQsle3MlRFFnd2H4&limit=3&offset=0&linked_partitioning=1&app_version=1565000058&app_locale=en';
const resolveUrl = 'https://soundcloud.com/tubby-black/god-prod-by-cxdy';
const GODbg = './assets/images/god.jpg';

const {
    SoundCloudLogoSVG,
    PlayIconSVG,
    PauseIconSVG,
    NextIconSVG,
    PrevIconSVG
  } = Icons;


const Player = withSoundCloudAudio(props => {
    let { track, duration, currentTime } = props;
    
    return (
    <div className="py2 white bg-cover bg-top rounded relative" style={{backgroundImage: 'url(${GODbg})'}}>
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
            <div className="center py4 relative z1">
                <h3 className="h4 nowrap caps mb0">{track ? track.user.username : ''}</h3>
                <h2 className="h0 nowrap caps m0">{track ? track.title : ''}</h2>
            </div>
            <div className="flex flex-center px2 relative z1">
                <PlayButton
                className="flex-none h2 mr2 button button-transparent button-grow rounded"
                {...props} />
                <VolumeControl
                className='mr2 flex flex-center'
                buttonClassName="flex-none h2 button button-transparent button-grow rounded"
                rangeClassName="custom-track-bg"
                {...props} />
                <Progress
                className="flex-auto bg-darken-3 rounded"
                innerClassName="rounded-left bg-white"
                value={(currentTime / duration) * 100 || 0}
                {...props} />
        </div>
    </div>
    )
});


class HomeIndex extends React.Component {

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

                        <Player
                            clientId={clientId}
                            resolveUrl={resolveUrl}
                            onReady={() => console.log('track is loaded!')} />

                        <ul className="actions">
                            <li><a href="https://soundcloud.com/tubby-black/tracks" target="_blank" rel="noopener noreferrer" className="button">All Music</a></li>
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
