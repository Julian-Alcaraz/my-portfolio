import './NavItem.css';

type NavItemProps = {
  value: string;
  linkValue: string;
};

function NavItem({ value, linkValue }: NavItemProps) {
  return (
    <span>
      <a href={'#' + linkValue}>{value}</a>
    </span>
  );
}

export default NavItem;
