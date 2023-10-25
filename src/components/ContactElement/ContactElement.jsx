import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li key={id} className={css.contactListItem}>
      <div className={css.contactDiv}>
        <FaRegUserCircle className={css.contactAvatar} />
        <div className={css.dataDiv}>
          {name}: {number}
        </div>

        <button
          className={css.contactListItemBtn}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBin2Line className={css.contactItemSvg} />
        </button>
      </div>
    </li>
  );
};
