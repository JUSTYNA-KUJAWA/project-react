import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../Redux/store';

const SearchForm = () => {
  const placeholderStr = useSelector(state => state.searchString.searchString);
  const [searchString, setSearchString] = useState();
  const dispatch = useDispatch();

  const hundleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString({searchString}));
    setSearchString('');
  }

  return (
    <form className={styles.searchForm}
    onSubmit={hundleSubmit}>
    <TextInput placeholder={placeholderStr}
      value={searchString}
      onChange = {e => setSearchString(e.target.value)} />
      <Button>
        <span className=' fa fa-search'/>
      </Button>
    </form>
  )
}

export default SearchForm;