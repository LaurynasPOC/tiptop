import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { ICountry } from '@pages/Representatives/Representatives';

interface CountrySelectorProps {
  value?: any;
  onChange: (value: ICountry | null) => void;
  placeholder?: string;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ value, onChange, placeholder }) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <Select
      styles={{
        control: (baseStyles: any) => ({
          ...baseStyles,
          borderRadius: '8px',
          marginTop: '5px',
          padding: '3px 5px',
        }),
        option: (baseStyles: any, state: { isFocused: boolean }) => ({
          ...baseStyles,
          background: state.isFocused ? 'var(--lbg)' : 'white',
          color: 'black',
        }),
      }}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CountrySelector;
