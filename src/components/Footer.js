import github from '../images/GitHub-Mark-64px.png';
import twitter from '../images/Twitter-logo-blue.png'
import linked from '../images/LI-In-Bug.png'

function Footer() {
    return (
        <footer>
            <h4>
                Get in touch with me
            </h4>
            <a target="_blank" rel="noreferrer" href="https://github.com/trufl">
                <img alt="github logo" src={github}/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/SaragosaTristan">
                <img alt="twitter-logo" src={twitter}/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tristan-saragosa-b02908257">
                <img alt="linkedin-logo" src={linked}/>
            </a>
        </footer>
    );
}

export default Footer;