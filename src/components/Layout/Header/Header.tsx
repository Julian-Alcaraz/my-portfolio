import NavItem from './Components/NavItem/NavItem';
import './Header.css';
import ModeButton from './Components/ModeButton/ModeButton';
import ContactButton from './Components/ContactButton/ContactButton';

function Header() {
  const navItems = [
    { value: 'Inicio/yo', linkValue: 'me' },
    { value: 'Skills', linkValue: 'skills' },
    { value: 'Experience', linkValue: 'experience' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="border-4 border-amber-900 flex justify-between py-4 px-10  ">
        {
          //
          navItems.map((item, index) => (
            <NavItem key={index} value={item.value} linkValue={item.linkValue} />
          ))
        }
        <div>
          <ContactButton></ContactButton>
          <ModeButton></ModeButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
