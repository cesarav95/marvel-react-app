import { useState } from 'react';
import Elemento from './Elemento';

const Componente = () => {
  const [value, setValue] = useState('');
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return <Elemento value={value} handleOnChange={handleOnChange} />;
};

export default Componente;
