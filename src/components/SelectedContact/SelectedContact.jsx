import css from './SelectedContact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../operations';

const SelectedContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleRemove = id => dispatch(deleteContact(id));

  return (
    <div className={css.itemWrapper} id={id}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => handleRemove(id)}
        className={css.buttonDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default SelectedContact;
