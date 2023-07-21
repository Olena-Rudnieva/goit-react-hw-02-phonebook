import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  align-items: center;
  letter-spacing: 0.04em;
  background-color: #4d5ae5;
  color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 20px;

  &:hover,
  &:focus {
    background-color: #111b87;
  }
`;
