import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';
import { useLocalStorage } from '../../util';

const ThemeSwitcher = ({ setIsLightTheme }) => {
  const [theme, setTheme] = useLocalStorage('lendo-theme', 'light');

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setIsLightTheme(theme === 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <Button
      variant={theme === 'dark' ? 'warning' : 'secondary'}
      className="rounded-circle p-2 d-flex align-items-center justify-content-center"
      role="switch"
      onClick={handleThemeToggle}
    >
      {theme === 'dark' ? (
        <FaSun className="fs-5" />
      ) : (
        <FaMoon className="fs-5" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
