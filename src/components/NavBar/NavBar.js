import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.icon + ' fa fa-tasks'}></span>
        <ul>
          <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive}) => isActive && styles.linkActive} to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;