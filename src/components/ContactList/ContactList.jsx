import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul>
      {data.map(option => {
        return (
          <ContactListItem
            key={option.id}
            option={option}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
