import React, { useReducer } from 'react'
import reducerCounter from '../../../reducers/CounterReducer';

const Componente = () => {
    
    const [counter, dispatchCounter] = useReducer(reducerCounter, {
        count: 0,
        frozen: false
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p>Contador: {counter.count}</p>
                    <button className="btn btn-primary mr-3" onClick={()=>{dispatchCounter({type:'INCREASE'})}}>Aumentar</button>
                    <br/>
                    <button className="btn btn-warning mr-3" onClick={()=>{dispatchCounter({type:'DECREASE'})}}>Disminuir</button>
                    <br/>
                    <button className="btn btn-danger mr-3" onClick={()=>{dispatchCounter({type:'RESET'})}}>Reiniciar</button>
                    <br/>
                    <button className="btn btn-success mr-3" onClick={()=>{dispatchCounter({type:'FROZEN'})}}>Congelar</button>                    
                </div>
                
            </div>
        </div>
    )
}
export default  Componente;

/** WITH useState
 *   const [count, setCount] = useState(0);
    const [frozen, setFrozen] = useState(false);

    const handlerIncrease = () => !frozen && setCount(count + 1);
    const handlerDecrese = () => !frozen && setCount(count - 1);
    const handlerReset = () => !frozen && setCount(0);
    const handlerFrozen = ()=> setFrozen(!frozen);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p>Contador: {count}</p>
                    <button className="btn btn-primary mr-3" onClick={handlerIncrease}>Aumentar</button>
                    <br/>
                    <button className="btn btn-primary mr-3" onClick={handlerDecrese}>Disminuir</button>
                    <br/>
                    <button className="btn btn-primary mr-3" onClick={handlerReset}>Reiniciar</button>
                    <br/>
                    <button className="btn btn-primary mr-3" onClick={handlerFrozen}>Congelar</button>                    
                </div>
                
            </div>
        </div>
    )
 */

