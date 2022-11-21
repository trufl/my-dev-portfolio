import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Image } from '@nextui-org/react';
import sun from '../../../images/sun.png';
import moon from '../../../images/moon.png';

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
        shadow
        bordered
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
      <Image
      width={24}
      height={24}  
      src={ isDark ? moon : sun }
      alt="Theme icon"
      objectFit="scale-down"
    />
    </>
  );
}

export default Navigation;
