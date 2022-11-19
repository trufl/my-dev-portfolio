import NavTabs from './NavTabs/NavTabs';


export default function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </ul>
    );
}