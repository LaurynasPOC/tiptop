import React, { useState, FormEvent } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import styled from 'styled-components';
import Checkbox from './CheckBox';
import { mobile } from '@styles/breakpoints';

const FormStyles = styled.form`
  & > div > input {
    position: relative;
    max-width: 520px;
    margin: 0 auto;
    border-radius: 8px;
    background: #d9d9d9;
    font-size: 18px;
  }
  & > button {
    margin-top: 20px;
  }
  & > img {
    width: 120px;
  }
  @media ${mobile} {
    button {
      width: 100%;
    }
  }
`;
interface SubscribeFormProps {
  buttonText: string;
  checkbox: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  response: string;
  email: string;
  setEmail: (value: string) => void;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({
  buttonText,
  checkbox,
  onSubmit,
  response,
  email,
  setEmail,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <FormStyles onSubmit={onSubmit}>
      <Input
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        type="email"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        placeholder="Enter email address"
        required
      />
      {checkbox && (
        <>
          <Checkbox
            value={checked}
            onChange={() => setChecked(!checked)}
            label={' I accept to the privacy policy and agree to receive updates from TipTop.'}
          />
          <Button variant="primary" disabled={!checked}>
            {buttonText}
          </Button>
        </>
      )}
      {!checkbox && <Button variant="primary">{buttonText}</Button>}
    </FormStyles>
  );
};

export default SubscribeForm;
