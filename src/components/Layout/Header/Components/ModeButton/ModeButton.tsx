import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './ModeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function ModeButton() {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
    // Aquí podrías agregar lógica para cambiar clases del body, etc.
  };
  return (
    <button onClick={toggleMode} className="cursor-pointer">
      <FontAwesomeIcon icon={isLightMode ? faMoon : faSun} />
    </button>
  );
}

export default ModeButton;
