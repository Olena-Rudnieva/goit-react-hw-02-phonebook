import PropTypes from 'prop-types';

export const ContactListItem = ({ option, onDeleteContact }) => {
  return (
    <li>
      {option.name}: {option.number}
      <button type="button" onClick={() => onDeleteContact(option.id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  option: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
