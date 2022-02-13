import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.icon + ' fa fa-tasks'}></span>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;