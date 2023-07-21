import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  border: 1px solid #111;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #111;
  border-radius: 4px;
  padding: 4px;
  font-size: 16px;
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

  &:hover,
  &:focus {
    background-color: #111b87;
  }
`;
