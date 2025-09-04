import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ModeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../../../../../contexts/ThemeContext';

function ModeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const [isLightMode, setIsLightMode] = useState(true);
  // const toggleMode = () => {
  //   setIsLightMode((prev) => !prev);
  //   // Aquí podrías agregar lógica para cambiar clases del body, etc.
  // };
  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme}
      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
    </button>
  );
}

export default ModeButton;
