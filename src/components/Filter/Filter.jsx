import css from './Filter.module.css';
import { useSelector ,useDispatch } from 'react-redux';
import { filterSearch } from '../../redux/contactSlice';

function Filter() {
  const filterR = useSelector(state=>state.contact.filter)
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterSearch(e.currentTarget.value))
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterR}
        onChange={changeFilter}
      />
    </label>
  );
}

export default Filter;
