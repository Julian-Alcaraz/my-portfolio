import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import styles from './ExperienceList.module.css';

interface ExperienceData {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceListProps {
  experiences: ExperienceData[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.title}>Experiencia Laboral</h2>
      <div className={styles.list}>
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            company={exp.company}
            role={exp.role}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}
