import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';

export const ContactListItem = ({ option, onDeleteContact }) => {
  return (
    <Item>
      <span>
        {option.name}: {option.number}
      </span>
      <Button type="button" onClick={() => onDeleteContact(option.id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  option: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
