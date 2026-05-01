import styles from './Info.module.css';

type PersonalData = {
  name: string;
  title: string;
  about: string;
  email: string;
  github: string;
};

type InfoProps = {
  profile: PersonalData;
};

export default function Info({ profile }: InfoProps) {
  return (
    <div className={styles.infoContainer}>
      <span className={styles.greeting}>Hola, soy</span>
      <h1 className={styles.name}>{profile.name}</h1>
      <h2 className={styles.title}>{profile.title}</h2>
      <p className={styles.about}>{profile.about}</p>
      
      <div className={styles.actions}>
        <a href={`mailto:${profile.email}`} className={styles.btnPrimary}>
          Contactar
        </a>
        <a 
          href={`https://github.com/${profile.github}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btnSecondary}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
