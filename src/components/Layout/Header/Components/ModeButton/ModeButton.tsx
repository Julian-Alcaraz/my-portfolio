import { FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';
import styles from './ModeButton.module.css';

function ModeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className={styles.toggleBtn}
      aria-label="Alternar modo claro/oscuro"
      title="Alternar modo claro/oscuro"
    >
      <span className={styles.icon}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
}

export default ModeButton;
