import styles from './List.module.scss';
import Column from '../Column/Column';
//import { /*useEffect*/ useState } from 'react';
//import shortid from 'shortid';
import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getColumnsByList } from '../../Redux/columnRedux';
import  { getListById } from '../../Redux/listRedux';
import { Navigate, useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';


const List = () => {

  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));
  if(!listData) return <Navigate to="/"/>

  return (
    <div className={styles.list}>
      <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm/>
        <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />

        )}
        </section>

        <ColumnForm listId={listId}/>
    </div>
  )
}

export default List;