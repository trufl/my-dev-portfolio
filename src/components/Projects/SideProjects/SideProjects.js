import { Card, Grid, Text, Row, Link, Button, Col } from '@nextui-org/react';
import cliLogo from '../../../images/cli-logo.png';
import quiz from '../../../images/quiz.png';
import weather from '../../../images/weather.png';

function SideProjects() {
    return (
        <>
            <Grid.Container justify='center'>
                <Text justify='center' h2 b>
                    Side projects
                </Text>
            </Grid.Container>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Image
                            src={quiz}
                            objectFit='cover'
                            alt='Quiz App Homepage'
                            width="100%"
                            height={340}
                        />
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row align='center'>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Text color="#d1d1d1" size={18}>
                                                JavaScript Quiz
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                HTML, JavaScript, CSS
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button flat shadow auto rounded color="primary">
                                            <Link
                                                color="primary"
                                                target="_blank"
                                                href="https://trufl.github.io/javascript-quiz/"
                                            >
                                                <Text
                                                    css={{ color: "inherit" }}
                                                    size={12}
                                                    weight="bold"
                                                    transform="uppercase"
                                                >
                                                    Visit App
                                                </Text>
                                            </Link>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Image
                            src={weather}
                            objectFit='cover'
                            alt='Weather App Homepage'
                            width="100%"
                            height={340}
                        />
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row align='center'>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Text color="#d1d1d1" size={18}>
                                                Weather Application
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                JavaScript, APIs
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button flat shadow auto rounded color="primary">
                                            <Link
                                                color="primary"
                                                target="_blank"
                                                href="https://trufl.github.io/weather-application/"
                                            >
                                                <Text
                                                    css={{ color: "inherit" }}
                                                    size={12}
                                                    weight="bold"
                                                    transform="uppercase"
                                                >
                                                    Visit App
                                                </Text>
                                            </Link>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Image
                            src={cliLogo}
                            objectFit='cover'
                            alt='Command Line Interface Logo'
                            width="100%"
                            height={340}
                        />
                        <Card.Footer
                            isBlurred
                            css={{
                                position: "absolute",
                                bgBlur: "#0f111466",
                                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                                bottom: 0,
                                zIndex: 1,
                            }}
                        >
                            <Row align='center'>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Text color="#d1d1d1" size={18}>
                                                Employee Tracker
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                JavaScript, Sequelize, Inquirer
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button flat shadow auto rounded color="primary">
                                            <Link
                                                color="primary"
                                                target="_blank"
                                                href="https://github.com/trufl/Employee-Tracker-Application"
                                            >
                                                <Text
                                                    css={{ color: "inherit" }}
                                                    size={12}
                                                    weight="bold"
                                                    transform="uppercase"
                                                >
                                                    Visit App
                                                </Text>
                                            </Link>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </>
    );
}

export default SideProjects;