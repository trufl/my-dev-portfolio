import Navigation from './Navigation/Navigation';
import { Navbar} from '@nextui-org/react';


function NavBar({ currentPage, handlePageChange }) {
    return (
        <Navbar.Content>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </Navbar.Content>
    );
}

export default NavBar;