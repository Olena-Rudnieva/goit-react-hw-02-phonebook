export const ContactListItem = ({ option }) => {
  return (
    <li>
      {option.name}: {option.number}
    </li>
  );
};
