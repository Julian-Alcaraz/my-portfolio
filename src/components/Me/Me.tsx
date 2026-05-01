import styles from './Me.module.css';
import Info from './components/Info/Info';
import Carousel from './components/Carousel/Carousel';

type PersonalData = {
  name: string;
  title: string;
  about: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  birthDate: string;
};

type MeProps = {
  profile: PersonalData;
};

function Me({ profile }: MeProps) {
  return (
    <section id="me" className={styles.meSection}>
      <div className={styles.layoutContainer}>
        {/* Columna 1 (60%): Info Component */}
        <div className={styles.infoColumn}>
          <Info profile={profile} />
        </div>

        {/* Columna 2 (40%): Carousel Component */}
        <div className={styles.carouselColumn}>
          <Carousel profile={profile} />
        </div>
      </div>
    </section>
  );
}

export default Me;
