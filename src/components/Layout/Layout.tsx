import Experience from '../Experience/Experience';
import Me from '../Me/Me';
import Skill from '../Skills/Skill';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Layout.css';

function Layout() {
  return (
    <div className="border-2 m-1">
      <Header></Header>
      <Me></Me>
      <Skill></Skill>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
