import React from 'react';

const Componente = () => {
  const [men, setMen] = React.useState(0);
  const [woman, setWoman] = React.useState(0);

  React.useEffect(() => {
    console.log('Solo se ejecuta una vez (sin dependencias).');
  }, []);

  React.useEffect(() => {
    console.log('Se ejecuta cada vez que el estadp WOMAN cambia (setWoman).');
  }, [woman]);

  React.useEffect(() => {
    console.log('Se ejecuta cada vez que el estadp MEN cambia (setMen).');
  }, [men]);

  return (
    <div className="container">
      <div className="row">
        <p>Contador Mujeres: {woman}</p>
        <p>Contador Hombres: {men}</p>
        <br />
        <button
          className="btn btn-danger"
          onClick={() => {
            setWoman(woman + 1);
          }}
        >
          Mujeres
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setMen(men + 1);
          }}
        >
          Hombres
        </button>
      </div>
    </div>
  );
};

export default Componente;
