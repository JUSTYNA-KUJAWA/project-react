import { addList } from '../../Redux/listRedux';
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from './ListForm.module.scss';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( addList ({title,description}));
    setTitle('');
    setDescription('');
  }

  return(
    <div className={styles.listForm}>
      <form onSubmit={handleSubmit}>
        Title:<TextInput value={title} onChange={e => setTitle(e.target.value)}/>
        Description:<TextInput value={description} onChange={e => setDescription(e.target.value)}/>
        <Button>Add List</Button>
      </form>
    </div>
  )
}

export default ListForm;