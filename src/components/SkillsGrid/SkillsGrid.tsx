import { 
  SiAngular, SiReact, SiHtml5, SiJavascript, SiBootstrap,
  SiNodedotjs, SiExpress, SiNestjs, SiPhp,
  SiFlutter, SiAndroid, SiIos, SiPwa,
  SiMysql, SiPostgresql, SiDocker, SiLinux,
  SiGit, SiGithub, SiBitbucket, SiScrumalliance
} from 'react-icons/si';
import { FaCode, FaDatabase, FaServer, FaTools, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import styles from './SkillsGrid.module.css';
import type { ReactNode } from 'react';

// Helper function to map string names to icons
const getIconForSkill = (skillName: string): ReactNode => {
  const normalized = skillName.toLowerCase();
  
  if (normalized.includes('angular')) return <SiAngular />;
  if (normalized.includes('react')) return <SiReact />;
  if (normalized.includes('html')) return <SiHtml5 />;
  // if (normalized.includes('css')) return <SiCss3 />;
  if (normalized.includes('javascript')) return <SiJavascript />;
  if (normalized.includes('bootstrap')) return <SiBootstrap />;
  
  if (normalized.includes('node')) return <SiNodedotjs />;
  if (normalized.includes('express')) return <SiExpress />;
  if (normalized.includes('nest')) return <SiNestjs />;
  // if (normalized.includes('c#') || normalized.includes('csharp')) return <SiCsharp />;
  if (normalized.includes('php')) return <SiPhp />;
  
  if (normalized.includes('flutter')) return <SiFlutter />;
  if (normalized.includes('android')) return <SiAndroid />;
  if (normalized.includes('ios')) return <SiIos />;
  if (normalized.includes('pwa')) return <SiPwa />;
  
  if (normalized.includes('mysql')) return <SiMysql />;
  if (normalized.includes('postgres')) return <SiPostgresql />;
  if (normalized.includes('sql')) return <FaDatabase />;
  
  if (normalized.includes('docker')) return <SiDocker />;
  if (normalized.includes('linux')) return <SiLinux />;
  // if (normalized.includes('windows')) return <SiWindows />;
  
  if (normalized.includes('github')) return <SiGithub />;
  if (normalized.includes('bitbucket')) return <SiBitbucket />;
  if (normalized.includes('git')) return <SiGit />;
  if (normalized.includes('scrum')) return <SiScrumalliance />;
  
  return null; // No specific icon
};

// Map categories to icons
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend': return <FaGlobe />;
    case 'backend': return <FaServer />;
    case 'mobile': return <FaMobileAlt />;
    case 'databases': return <FaDatabase />;
    case 'devops': return <SiDocker />;
    case 'tools': return <FaTools />;
    default: return <FaCode />;
  }
};

interface SkillsData {
  [category: string]: string[];
}

interface SkillsGridProps {
  skills: SkillsData;
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const categories = Object.keys(skills);

  if (categories.length === 0) return null;

  return (
    <section id="skills" className={styles.section}>
      <h2 className={styles.title}>Habilidades Técnicas</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <article key={category} className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.categoryIcon}>{getCategoryIcon(category)}</span>
              {category}
            </h3>
            <ul className={styles.skillsList}>
              {skills[category].map((skill) => {
                const icon = getIconForSkill(skill);
                return (
                  <li key={skill} className={styles.skillPill}>
                    {icon && <span className={styles.skillIcon}>{icon}</span>}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
