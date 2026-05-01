import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function ExperienceCard({ company, role, startDate, endDate, description }: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.role}>{role}</h3>
          <h4 className={styles.company}>{company}</h4>
        </div>
        <span className={styles.date}>
          {startDate} - {endDate}
        </span>
      </header>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
