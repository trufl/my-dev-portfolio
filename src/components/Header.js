import NavBar from "./NavBar/NavBar";
import { Navbar, Text, Grid, Col } from '@nextui-org/react';

function Header ({ currentPage, handlePageChange }) {
    return(
        <header>
            <Grid.Container>
                <Navbar isBordered variant='static'>
                <Grid xs>
                    <Navbar.Brand>
                        <Col>
                            <Text b h1 size={30} >
                                Tristan Saragosa
                            </Text>
                            <Text>
                                Full Stack Web Developer
                            </Text>
                        </Col>
                    </Navbar.Brand>
                </Grid>
                <Grid>
                    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                </Grid>
                </Navbar>
            </Grid.Container>
        </header>
    );
}

export default Header;