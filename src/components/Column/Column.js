import Card from '../Card/Card';
import styles from './Column.module.scss'; 
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../Redux/store';


const Column = props => {
  // console.log(props);
 // const searchString = useSelector(state => state.searchString.searchString);
  //const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase()));
  const cards = useSelector(state => getFilteredCards(state, props.id));
  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
      <ul className={styles.cards}>
      {cards.map(card => <Card key={card.id} title={card.title} columnId={card.columnId}/>)}
      </ul>
      <CardForm columnId={props.id}/>
    </article>
    
  )
  
}


export default Column;