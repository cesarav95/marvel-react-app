import React from 'react';

const ElementoA = React.memo(({ texto }) => {
  console.log(' ===> Renderizando elemento A.');
  return <p>Texto: {texto}</p>;
});

export default ElementoA;
