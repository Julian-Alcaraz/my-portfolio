import Header from './Header/Header';
import Footer from './Footer/Footer';
import Me from '../Me/Me';
import { ExperienceList } from '../ExperienceList/ExperienceList';
import { SkillsGrid } from '../SkillsGrid/SkillsGrid';
import { ProjectsList } from '../ProjectsList/ProjectsList';

import cvData from '../../data/cvData.json';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContent}>
        <Me profile={cvData.personal} />
        <SkillsGrid skills={cvData.skills} />
        <ExperienceList experiences={cvData.experience} />
        <ProjectsList projects={cvData.projects} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
