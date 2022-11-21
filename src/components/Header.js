import NavBar from "./NavBar/NavBar";
import { Navbar, Text, Spacer, Grid } from '@nextui-org/react';

function Header ({ currentPage, handlePageChange }) {
    return(
        <header>
            <Grid.Container>
                <Navbar isBordered variant='static'>
                <div>
                    
                    <Navbar.Brand>
                        <Grid>
                            <Text b h1 size={30} >
                                Tristan Saragosa
                            </Text>
                        </Grid>
                        <Spacer/>
                        <Text>
                            Full Stack Web Developer
                        </Text>
                    </Navbar.Brand>
                </div>
                <div>
                    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
                </Navbar>
            </Grid.Container>
        </header>
    );
}

export default Header;