import NavItem from './Components/NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMoon } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

function Header() {
  return (
    <div>
      Header
      <div className="border-4 flex justify-between py-4 px-10">
        <NavItem value="Inicio/yo" linkValue="me" />
        <NavItem value="Skills" linkValue="skills" />
        <NavItem value="Experience" linkValue="experience" />
        <div>
          <button>
            <FontAwesomeIcon icon={faPhone} />
          </button>
          <button>
    
            <FontAwesomeIcon icon={faMoon} />
            web color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
