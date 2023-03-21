import React, { useState, useEffect } from 'react';

const Componente = () => {
  const [message, setMessage] = useState({});

  const handleSetMessage = () => {
    const objTemp = {
      id: 27,
      text: 'Message Text',
    };

    setMessage(objTemp);
  };

  //COMPONENTDIDMOUNT
  useEffect(() => {
    console.log('USE EFFECT');
    handleSetMessage();
  }, []);

  console.log('RETURN');
  return (
    <div>
      <p>{message.text}</p>
    </div>
  );
};

export default Componente;
