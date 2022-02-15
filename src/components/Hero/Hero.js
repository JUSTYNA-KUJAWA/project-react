import styles from'./Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import PageUntitle from '../PageUntitle/PageUntitle';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <PageUntitle>A simple to-do app, with lists, columns and card</PageUntitle>
    </div>
  )
}

export default Hero;