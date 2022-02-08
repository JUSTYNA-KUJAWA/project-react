import { useState } from "react"
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import styles from "./CardForm.module.scss";

const CardForm = props =>{
  // console.log(props);
  const columnId = props.columnId;
  const dispatch = useDispatch();

  const [title,setTitle] = useState('')
  const handleSubmit = e =>{
    e.preventDefault();
    dispatch({ type : 'ADD_CARD', payload: {title, columnId} })
    // props.action({title: title}, props.columnId)
    setTitle('');
  }
  return(
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput  value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  )
}
export default CardForm;