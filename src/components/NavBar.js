import { Link, NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className='flex justify-evenly bg-red-500 text-white font-semibold'>
            <NavLink to='/' className={navData => (navData.isActive ? styles.active : '')}>home</NavLink>
            <NavLink to='/about' className={navData => (navData.isActive ? styles.active : '')}>about</NavLink>
            <NavLink to='/gallery' className={navData => (navData.isActive ? styles.active : '')}>gallery</NavLink>
            <NavLink to='/contact' className={navData => (navData.isActive ? styles.active : '')}>contact</NavLink>
        </div>
    );
};

export default NavBar;