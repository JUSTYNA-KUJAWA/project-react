import styles from'./Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>My first React App</h1>
      <p className={styles.subtitle}>A simple to-do app, with lists, column and cards</p>
    </div>
  )
}

export default Hero;