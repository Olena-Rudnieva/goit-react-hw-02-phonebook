import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <List>
      {data.map(option => {
        return (
          <ContactListItem
            key={option.id}
            option={option}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
