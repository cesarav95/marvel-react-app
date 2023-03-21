const Elemento = (props) => {
  return (
    <div className="container">
      <br />
      <div className="row">
        <input
          type="text"
          className="form-control"
          value={props.value}
          onChange={props.handleOnChange}
        />
        <p>Texto ingresado: {props.value}</p>
      </div>
    </div>
  );
};

export default Elemento;
