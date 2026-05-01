import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaBirthdayCake, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Carousel.module.css';

type PersonalData = {
  name: string;
  email: string;
  location: string;
  phone: string;
  github: string;
  linkedin: string;
  birthDate: string;
};

type CarouselProps = {
  profile: PersonalData;
};

export default function Carousel({ profile }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = () => setCurrentSlide(1);
  const prevSlide = () => setCurrentSlide(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (diff > 50 && currentSlide < 1) {
      nextSlide();
    } else if (diff < -50 && currentSlide > 0) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div className={styles.carouselWrapper} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      
      {/* Botón Flotante Izquierdo (Fuera del flujo del contenedor interno para evitar clip) */}
      <button 
        className={`${styles.arrowBtn} ${styles.arrowBtnLeft}`}
        onClick={prevSlide}
        aria-label="Ver Imagen"
        style={{ pointerEvents: currentSlide === 0 ? 'none' : 'auto', visibility: currentSlide === 0 ? 'hidden' : 'visible' }}
      >
        <FaChevronLeft />
      </button>

      <button 
        className={`${styles.arrowBtn} ${styles.arrowBtnRight}`}
        onClick={nextSlide}
        aria-label="Ver Datos Personales"
        style={{ pointerEvents: currentSlide === 1 ? 'none' : 'auto', visibility: currentSlide === 1 ? 'hidden' : 'visible' }}
      >
        <FaChevronRight />
      </button>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          
          {/* Slide 1: Presentación (Imagen) */}
          <div className={`${styles.slide} ${styles.imageSlide} ${currentSlide === 0 ? styles.active : ''}`}>
            <div className={styles.imageWrapper}>
              <img 
                src="src/assets/profile.jpg" 
                alt={profile.name} 
                className={styles.profileImage}
                onError={(e) => { e.currentTarget.src = 'profile.png' }} 
              />
            </div>
          </div>

          {/* Slide 2: Datos Personales */}
          <div className={`${styles.slide} ${styles.dataSlide} ${currentSlide === 1 ? styles.active : ''}`}>
            <div className={styles.dataList}>
              <div className={styles.dataItem}>
                <span className={styles.dataLabel}>Ubicación</span>
                <span className={styles.dataValue}>
                  <FaMapMarkerAlt className={styles.icon}/> {profile.location}
                </span>
              </div>
              <div className={styles.dataItem}>
                <span className={styles.dataLabel}>Contacto</span>
                <span className={styles.dataValue}>
                  <FaPhoneAlt className={styles.icon}/> {profile.phone}
                </span>
                <span className={styles.dataValue}>
                  <FaEnvelope className={styles.icon}/> <a href={`mailto:${profile.email}`} className={styles.dataLink}>{profile.email}</a>
                </span>
              </div>
              <div className={styles.dataItem}>
                <span className={styles.dataLabel}>Redes</span>
                <span className={styles.dataValue}>
                  <FaGithub className={styles.icon}/> <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className={styles.dataLink}>{profile.github}</a>
                </span>
                <span className={styles.dataValue}>
                  <FaLinkedin className={styles.icon}/> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.dataLink}>LinkedIn</a>
                </span>
              </div>
              <div className={styles.dataItem}>
                <span className={styles.dataLabel}>Nacimiento</span>
                <span className={styles.dataValue}>
                  <FaBirthdayCake className={styles.icon}/> {profile.birthDate}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        <button 
          className={`${styles.dot} ${currentSlide === 0 ? styles.active : ''}`}
          onClick={prevSlide}
          aria-label="Ir a slide de imagen"
        />
        <button 
          className={`${styles.dot} ${currentSlide === 1 ? styles.active : ''}`}
          onClick={nextSlide}
          aria-label="Ir a slide de datos"
        />
      </div>
    </div>
  );
}
