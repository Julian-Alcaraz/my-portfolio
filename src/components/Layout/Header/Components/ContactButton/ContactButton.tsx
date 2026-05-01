import { FaEnvelope } from 'react-icons/fa';
import cvData from '../../../../../data/cvData.json';
import styles from './ContactButton.module.css';

function ContactButton() {
  return (
    <a href={`mailto:${cvData.personal.email}`} className={styles.contactBtn}>
      <span className={styles.icon}><FaEnvelope /></span>
      Contacto
    </a>
  );
}

export default ContactButton;
