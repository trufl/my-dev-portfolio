import { Card, Grid, Text, Row, Col, Link, Button } from '@nextui-org/react';
import cardBattle from '../../../images/Card-Battle.png'
import nonsocial from '../../../images/nonsocial.png'
import olympus from '../../../images/olympus.png';

function MainProjects() {
    return (
        <>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={16} md={3}>
                    <Card isHoverable >
                        <Card.Image
                            src={nonsocial}
                            objectFit='cover'
                            alt='Card Game Project'
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
                                                NonSocial Drinker
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
                                                href="https://trufl.github.io/nonsocial-drinker/"
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
                            src={cardBattle}
                            objectFit='cover'
                            alt='Card Game Project'
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
                                                Card Battle
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                Express, Sequelize, JavaScript, Handlebars
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
                                                href="https://card-battle.herokuapp.com/"
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
                            src={olympus}
                            objectFit='cover'
                            alt='Card Game Project'
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
                                                Olympus Project
                                            </Text>
                                            <Text color="#d1d1d1" size={12}>
                                                React, GraphQL, Mongoose, Express, JavaScript
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
                                                href="https://olympus-prjct.herokuapp.com"
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

export default MainProjects;