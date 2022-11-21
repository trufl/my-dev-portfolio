import pdf from '../../images/Tristan-Saragosa.pdf';
import { Button, Text, Card, Spacer, Grid } from '@nextui-org/react';

function ResumeContainer() {

    return (
        <>
            <Spacer y={2}/>
            <Button>
                <a target="_blank" rel='noreferrer' href={pdf}><Text>Download My Resume</Text></a>
            </Button>
            <Grid.Container justify='center' gap={2}>
                <Grid xs md={5}>
                    <Card isHoverable>
                        <Card.Header>
                            <Text h2>
                                Front-End Proficiencies
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <ul>
                                <li><Text b>HTML</Text></li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs md={5}>
                    <Card isHoverable>
                        <Card.Header>Back-End Proficiencies</Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL + Sequelize</li>
                                <li>MongoDB + Mongoose</li>
                                <li>REST</li>
                                <li>APIs</li>
                                <li>GraphQL</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
            <Spacer y={2}/>
        </>
    );
}

export default ResumeContainer;