import { useEffect } from 'react';
import './ThemeSwitcher.scss';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';
import { useLocalStorage } from '../../util';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage('lendo-theme', 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <Button
      variant={theme === 'dark' ? 'warning' : 'dark'}
      className="rounded-circle px-3"
      role="switch"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <FaSun className="fs-4" />
      ) : (
        <FaMoon className="fs-4" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
