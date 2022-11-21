import { Card, Grid, Text, Spacer, Badge } from '@nextui-org/react';
import cardBattle from '../../images/Card-Battle.png'

function ProjectsContainer() {
    return (
        <>
            <Spacer y={2}/>
            <Grid.Container gap={2} justify='center'>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Badge enableShadow disableOutline color="warning" content="Front End" size="sm">
                        <Card.Header>
                            <Text h3>
                                NonSocial Drinker
                            </Text>
                        </Card.Header>
                        </Badge>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>An Application Created for the Socially Adverse</Text>
                            <Text>
                                HTML, JavaScript, CSS
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 100, left: 80 }}>
                            <Text h3>
                                Card Battle
                            </Text>
                        </Card.Header>
                        <Card.Body css={{ position: "absolute", zIndex: 1, top: 160, left: 50 }}>
                            <Text b>A Turn Based Card Game</Text>
                            <Text b>
                                Express, Sequelize,
                            </Text>
                            <Text b>
                                JavaScript, Handlebars
                            </Text>
                        </Card.Body>
                        <Badge enableShadow disableOutline shape='circle' placement='top' color="success" content="Full Stack" size="sm">
                        <Card.Image
                            src={cardBattle}
                            objectFit='fill'
                            alt='Card Game Project'
                            width="100%"
                            height={340}
                        />
                        </Badge>
                    </Card>
                </Grid>
                <Grid xs={16} md={3}>
                    <Card isHoverable isPressable>
                        <Badge enableShadow disableOutline color="success" content="Full Stack" size="sm">
                        <Card.Header>
                            <Text h3>
                                Coming Soon!
                            </Text>
                        </Card.Header>
                        </Badge>
                        <Card.Divider/>
                        <Card.Body>
                            <Text>A collabritive project, still being worked on</Text>
                            <Text>
                                React, GraphQL, Mongoose, Express, JavaScript
                            </Text>
                        </Card.Body>
                        
                    </Card>
                </Grid>
            </Grid.Container>
            <Spacer y={2}/>
            <Grid>
                <Text h2 b>
                    Side projects
                </Text>
                <Card isHoverable isPressable>
                    <Card.Header>
                        <Text h3>
                            JavaScript Quiz
                        </Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text>A small quiz on JavaScript topics</Text>
                        <Text>
                            HTML, JavaScript, CSS
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={2}/>
                <Card isHoverable isPressable>
                    <Card.Header>
                        <Text h3>
                            Weather Application
                        </Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text>Search for a city's current day weather and a five day forecast</Text>
                        <Text>
                            JavaScript, APIs
                        </Text>
                    </Card.Body>
                </Card>
                <Spacer y={2}/>
                <Card isHoverable isPressable>
                    <Card.Header>
                        <Text h3>
                            Employee Tracker
                        </Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body>
                        <Text>A back-end CLI application</Text>
                        <Text>
                            JavaScript, Sequelize, Inquirer
                        </Text>
                    </Card.Body>
                </Card>
            </Grid>
            <Spacer y={2}/>
        </>
    );
}


export default ProjectsContainer;