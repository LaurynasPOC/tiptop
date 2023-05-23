import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  label?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'email' | 'text' | 'password';
  pattern?: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  pattern,
  placeholder,
  type,
  required,
  ...rest
}) => (
  <StyledInput {...rest}>
    <label htmlFor={label}>{label}</label>
    <input
      placeholder={placeholder}
      name={label}
      value={value}
      pattern={pattern}
      onChange={onChange}
      required={required}
      {...rest}
    />
  </StyledInput>
);

export default Input;

const StyledInput = styled.div`
  input,
  label {
    display: block;
  }
  input {
    padding: 10px 15px;
    background: var(--text);
    color: var(--dbg);
    border: 1px solid var(--componentbg);
    border-radius: 8px;
    width: 100%;
    font-size: 14px;
    &:focus,
    &:hover {
      border-color: var(--special);
      outline: none;
    }
  }
  label {
    padding: 5px 15px;
    font-weight: 700;
    color: var(--lbg);
  }
`;
