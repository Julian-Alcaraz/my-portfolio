import styles from './ProjectsList.module.css';

interface ProjectData {
  id: number;
  name: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  stack: string[];
}

interface ProjectsListProps {
  projects: ProjectData[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.title}>Proyectos Destacados</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <header className={styles.projectHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <h4 className={styles.company}>{project.company}</h4>
              <span className={styles.date}>{project.startDate} - {project.endDate}</span>
            </header>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.stackItem}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
