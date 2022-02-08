import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss'; 
import { useDispatch } from 'react-redux';


const ColumnForm = props => {
  // console.log(props);
  const dispatch = useDispatch();


  const [title,setTitle] =  useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e =>{ 
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload:{title, icon } })
    // props.action({ title: title, icon: icon})
    setTitle('');
    setIcon('');
  }
  return (
    <div className={styles.columnForm}>
      <form onSubmit={handleSubmit} >
        Title:<TextInput type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        Icon:<TextInput type='text' value={icon} onChange={e => setIcon(e.target.value)}/>
        <Button>Add column</Button>
      </form>
    </div>
  )
}

export default ColumnForm;