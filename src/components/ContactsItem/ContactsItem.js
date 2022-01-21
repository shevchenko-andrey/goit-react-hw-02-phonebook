import PropTypes from 'prop-types';

import { Item } from './ContactsItem.styled';
function ContactsItem(id, name, number, onDeleteContact) {
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </Item>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;
