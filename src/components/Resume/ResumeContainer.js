import pdf from '../../images/Tristan-Saragosa.pdf';
import { Button, Text, Card, Spacer, Grid } from '@nextui-org/react';

function ResumeContainer() {

    return (
        <>
            <Spacer y={2}/>
            <Grid.Container justify='center'>
                <Button>
                    <a target="_blank" rel='noreferrer' href={pdf}><Text>Download My Resume</Text></a>
                </Button>
            </Grid.Container>
            <Spacer y={2}/>
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
                                <li><Text b size="$xl">HTML</Text></li>
                                <li><Text b size="$xl">CSS</Text></li>
                                <li><Text b size="$xl">JavaScript</Text></li>
                                <li><Text b size="$xl">React</Text></li>
                                <li><Text b size="$xl">jQuery</Text></li>
                                <li><Text b size="$xl">React</Text></li>
                                <li><Text b size="$xl">Bootstrap</Text></li>
                                <li><Text b size="$xl">Tailwind</Text></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs md={5}>
                    <Card isHoverable>
                        <Card.Header>
                            <Text h2>
                                Back-End Proficiencies
                            </Text>
                        </Card.Header>
                        <Card.Divider/>
                        <Card.Body>
                            <ul>
                                <li><Text b size="$xl">Node</Text></li>
                                <li><Text b size="$xl">Express</Text></li>
                                <li><Text b size="$xl">MySQL + Sequelize</Text></li>
                                <li><Text b size="$xl">MongoDB + Mongoose</Text></li>
                                <li><Text b size="$xl">REST</Text></li>
                                <li><Text b size="$xl">APIs</Text></li>
                                <li><Text b size="$xl">GraphQL</Text></li>
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