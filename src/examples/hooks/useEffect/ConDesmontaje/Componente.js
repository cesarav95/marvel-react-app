import React from 'react';
import Elemento from './Elemento';

const Componente = () => {
  const [render, setRender] = React.useState(false);
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <button
          onClick={() => {
            setRender(!render);
          }}
          type="button"
          className="btn btn-primary"
        >
          {render ? 'No Renderizar' : 'Renderizar'} Elemento
        </button>

        {render ? <Elemento /> : null}
      </div>
    </div>
  );
};

export default Componente;
