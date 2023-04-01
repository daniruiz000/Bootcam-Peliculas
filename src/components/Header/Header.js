import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-header.png';
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} />
      <NavLink to='/'>Peliculas</NavLink>
      <NavLink to='/quiz'>Quiz</NavLink>
      <button>ES</button>
      <button>EN</button>
    </div>
  );
};

export default Header;
