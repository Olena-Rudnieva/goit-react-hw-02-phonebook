import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ data }) => {
  return (
    <ul>
      {data.map(option => {
        return <ContactListItem key={option.id} option={option} />;
      })}
    </ul>
  );
};
