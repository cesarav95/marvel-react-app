import React from 'react';
import ElementoA from './ElementoA';
import ElementoB from './ElementoB';

const Componente = () => {
  const [elementoA, setElementoA] = React.useState('J');
  const [elementoB, setElementoB] = React.useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="form-group">
          <label htmlFor="texto">
            <b>Heroe</b>
          </label>
          <input
            name="texto"
            value={elementoA}
            onChange={(e) => setElementoA(e.target.value)}
            className="form-control"
          />
          <ElementoA texto={elementoA} />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="factorial">
            <b>Factorial</b>
          </label>
          <input
            type="number"
            name="factorial"
            value={elementoB}
            onChange={(e) => setElementoB(e.target.value)}
            className="form-control"
          />
          <ElementoB number={elementoB} />
        </div>
      </div>
    </div>
  );
};

export default Componente;
