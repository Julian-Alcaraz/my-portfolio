import './ContactButton.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactButton() {
  return (
    <button>
      <FontAwesomeIcon icon={faPhone} />
    </button>
  );
}
export default ContactButton;
