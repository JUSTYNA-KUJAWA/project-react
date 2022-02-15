import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch} from 'react-redux';
import { toggleCardFavorite } from '../../Redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const beFavorite = () => {
    dispatch(toggleCardFavorite(props.id));
  }
  return (
    <li className={styles.card}>{props.title}
    <button onClick={beFavorite} className={clsx(styles.button, props.isFavorite && styles.isFavorite) + ' fa fa-star-o' }></button>
    </li>
  )

}
export default Card;