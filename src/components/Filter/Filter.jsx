import { useSelector, useDispatch } from 'react-redux';
import { makeFilter, getFilter } from '../../redux/contacts/filterSlice';
import css from './Filter.module.css'

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  // Збереження значення фільтру
  const handleFilter = ({ currentTarget }) =>
    dispatch(makeFilter(currentTarget.value));

  return (
    <>
      <label className={css.filter}>
        <span>Quick contact find: </span>
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilter}
        />
      </label>
    </>
  );
}

export default Filter;
