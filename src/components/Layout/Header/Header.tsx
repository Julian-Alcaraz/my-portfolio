import ModeButton from './Components/ModeButton/ModeButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import cvData from './../../../data/cvData.json';
import styles from './Header.module.css';

function Header() {
  const navItems = [
    { name: 'Inicio', target: 'me' },
    { name: 'Habilidades', target: 'skills' },
    { name: 'Experiencia', target: 'experience' },
    { name: 'Proyectos', target: 'projects' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a 
              key={item.target} 
              href={`#${item.target}`} 
              className={styles.navLink}
              onClick={(e) => scrollToSection(e, item.target)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.socialIcons}>
            <a 
              href={`https://github.com/${cvData.personal.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href={cvData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <ModeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
