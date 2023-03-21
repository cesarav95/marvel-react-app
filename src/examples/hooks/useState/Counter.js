import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <p>Contador: {count}</p>
        <div className="col-6">
          <button className="btn btn-warning" onClick={handleIncrease}>
            Aumentar
          </button>
          <button className="btn btn-primary" onClick={handleDecrease}>
            Disminuir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
