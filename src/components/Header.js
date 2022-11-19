import NavBar from "./NavBar/NavBar";

function Header ({ currentPage, handlePageChange }) {
    return(
        <header>
            <div>
                <h1>
                    Tristan Saragosa
                </h1>
                <h2>
                    Full Stack Web Developer
                </h2>
            </div>
            <div>
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>

        </header>
    );
}

export default Header;