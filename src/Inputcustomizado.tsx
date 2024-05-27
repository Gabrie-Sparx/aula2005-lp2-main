import React from 'react';

interface InputCustomizadoProps {
  tipo?: 'text' | 'email' | 'number';
  placeholder?: string;
  defaultValue?: string;
}

const InputCustomizado: React.FC<InputCustomizadoProps> = ({
  tipo = 'text',
  placeholder,
  defaultValue,
}) => {
  return (
    <input
      type={tipo}
      style={{ color: 'red' }}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default InputCustomizado;