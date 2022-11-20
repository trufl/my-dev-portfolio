import Navigation from './Navigation/Navigation';


export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </ul>
    );
}