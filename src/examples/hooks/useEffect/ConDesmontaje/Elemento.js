import React from 'react';

const Elemento = () => {
  React.useEffect(() => {
    console.log('Montaje');

    return () => {
      console.log('Desmontaje');
    };
  });
  return (
    <div>
      <h3>Elemento Renderizado</h3>
    </div>
  );
};

export default Elemento;
