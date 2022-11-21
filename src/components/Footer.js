import githubDark from '../images/GitHub-Mark-64px.png';
import githubLight from '../images/GitHub-Mark-Light-64px.png'
import twitter from '../images/Twitter-logo-blue.png'
import linked from '../images/LI-In-Bug.png'
import { useTheme, Image, Row, Spacer, Grid, Text } from '@nextui-org/react'

function Footer() {
    const { isDark } = useTheme();

    return (
        <footer>
            <Grid.Container justify='center'>
                <Text h4>
                    Get in touch with me
                </Text>
                <Row justify='center'>
                    <a target="_blank" rel="noreferrer" href="https://github.com/trufl">
                        <Image
                            width={57}
                            height={57}
                            src={isDark ? githubLight : githubDark}
                            alt="github logo"
                        objectFit='fill'
                        />
                    </a>
                    <Spacer x={2}/>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/SaragosaTristan">
                        <Image
                            width={57}
                            height={57}
                            src={twitter}
                            alt="github logo"
                            objectFit='fill'
                        />
                    </a>
                    <Spacer x={2}/>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tristan-saragosa-b02908257">
                        <Image
                            width={57}
                            height={57}
                            src={linked}
                            alt="github logo"
                            objectFit='fill'
                        />
                    </a>
                </Row>
            </Grid.Container>
        </footer>
    );
}

export default Footer;