import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

function Navigation({ currentPage, handlePageChange }) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const labels = ['About Me', 'Projects', 'Resume']



  return (
    <>
      { labels.map((label) => (
          <li key={label}>
            <a
              href={`#${label.includes(' ') ? label.split(' ')[0].toLowerCase() + '-' + label.split(' ')[1].toLowerCase() : label.toLowerCase()}`}
              onClick={() => handlePageChange(label)}
            >
              {label}
            </a>
          </li>
        ))
      }
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </>
  );
}

export default Navigation;
