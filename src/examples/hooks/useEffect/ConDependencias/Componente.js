import React from 'react';

const Componente = () => {
  const [text, setText] = React.useState('');

  const handleSubmitText = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setText(formData.get('search'));
  };

  React.useEffect(() => {
    console.log(`El texto cambio:  ${text}`);
  }, [text]);

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <form onSubmit={handleSubmitText}>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" name="search" />
            </div>
            <div className="col-3">
              <button className="btn btn-primary" type="submit">
                Buscar
              </button>
            </div>
          </div>
          <h5>{text}</h5>
        </form>
      </div>
    </div>
  );
};

export default Componente;
