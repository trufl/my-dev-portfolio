function NavTabs({ currentPage, handlePageChange }) {
  const labels = ['About Me', 'Portfolio', 'Contact Me', 'Resume']

  return (
    <>
      { labels.map((label) => (
          <li key={label} className="nav-item">
            <a
              href={`#${label.includes(' ') ? label.split(' ')[0].toLowerCase() + '-' + label.split(' ')[1].toLowerCase() : label.toLowerCase()}`}
              onClick={() => handlePageChange(label)}
              className={currentPage === label ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </a>
          </li>
        ))
      }
    </>
  );
}

export default NavTabs;
