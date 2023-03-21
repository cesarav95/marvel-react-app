import { useState, useCallback} from 'react'

const functions = new Set();

const Componente = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = useCallback(()=>{
        setCounter1(counter1 + 1);
    },[counter1]);
    
    const increment2 = useCallback(()=>{
        setCounter2(counter2 + 1);
    },[counter2]);

    functions.add(increment1);
    functions.add(increment2);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p>Contador 1 : {counter1}</p>
                    <p>Contador 2 : {counter2}</p>
                    <br/>
                    <button onClick={increment1} className="btn btn-primary"> Aumentar Contador 1</button>
                    <button onClick={increment2} className="btn btn-success"> Aumentar Contador 2</button>
                    <p>Funciones {functions.size}</p>
                </div>
            </div>   
        </div>
    )
}

export default Componente
