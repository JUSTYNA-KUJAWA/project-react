import styles from './Favorite.module.scss';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFilteredIsFavoriteCards } from '../../Redux/store';
import PageTitle from '../PageTitle/PageTitle';




const Favorite = () => {

  const cards = useSelector(state => getFilteredIsFavoriteCards(state));
    if(cards.length === 0)
    return (
  
        <h1 className={styles.nofav}>No cards...</h1>
    );

  return (

    <div>
      <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
        </ul>
        </article>
    </div>
  );
};

export default Favorite;