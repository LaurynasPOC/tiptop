import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const CheckboxStyles = styled.div`
  padding: 20px 0;
`;

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
  return (
    <CheckboxStyles>
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    </CheckboxStyles>
  );
};

export default Checkbox;
