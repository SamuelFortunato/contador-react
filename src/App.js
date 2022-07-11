import React from "react"
import ReactDOM from 'react-dom/client';
import { useState } from "react"

export default function App(){

    //let numero = 0
    const [numero, setNumero] = useState(0)

    function aumentar() {
        setNumero(numero + 1)
    }

    function diminuir() {
        setNumero(numero - 1)
    }

    function reset() {
        setNumero(0)
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button className='btn'onClick={aumentar}>+</button>
        <button className='btn'onClick={diminuir}>-</button>
        <button className='btn'onClick={reset}>reset</button>
    </section>
}