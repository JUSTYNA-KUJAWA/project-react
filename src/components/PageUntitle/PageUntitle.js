import styles from './PageUntitle.module.scss';
import clsx from 'clsx';

const PageUntitle = props => {
  return (
    <p className={clsx(styles.untitle, props.addMargin && styles.addMargin)}>{props.children}</p>
  );
}

export default PageUntitle;