import React from 'react';

const ElementoB = ({ number }) => {
  console.log('==> Renderizando Elemento B.');

  let result = React.useMemo(() => {
    console.log('===> Calculando Factorial');
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }

    return factorial;
  }, [number]);

  return (
    <div>
      ({number})!={result}
    </div>
  );
};

export default ElementoB;
