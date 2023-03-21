import React, {useContext} from 'react'
import UserApplicationContext from '../../../context/UserContext'

const userApplication = {
    user: "",
    token: ""
}

const Componente = () => {
    const context = useContext(UserApplicationContext);
    return (
        <div>
            {context}
        </div>
    )
}

export default Componente
