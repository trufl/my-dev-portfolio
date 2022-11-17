import { useState } from 'react';
import NavTabs from './NavBar/NavTabs/NavTabs';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import Resume from './Pages/Resume';


export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch(currentPage){
      case 'About Me':
        document.title = currentPage;
        return <AboutMe />;
      case 'Portfolio':
        document.title = currentPage;
        return <Portfolio />;
      case 'Contact Me':
        document.title = currentPage;
        return <ContactMe />;
      case 'Resume':
        document.title = currentPage;
        return <Resume />;
      default:
        break;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
