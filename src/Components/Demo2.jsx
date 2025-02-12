import  { useState } from 'react'
import { IoAddCircle } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import './Demo2.css'
import Usuario from './Usuario';

function Demo2() {

    const [valor, setValor ]= useState(0)
    const [usuario, setUsuario] = useState("Leandro")

  return (
    <div className='container-demo2'>

          <button className='botao-diminuir' onClick={() => {setValor(valor - 1)}}> Diminuir <GrSubtractCircle/></button>
          <div className='numero-contador'>{valor}</div>
          <button className='botao-aumentar' onClick={() => {setValor(valor + 1)}}>Adicionar  <IoAddCircle/></button>
          <button onClick={() => {setUsuario(prompt("Username: "))}}>Fazer Login</button>
            {/* { usuario &&  <p>Olá, {usuario} !</p>} */}

            {usuario ? <p>Olá, {usuario} !</p> : <p>Faça login</p> }

            {/* <Usuario username={usuario}/> */}

            {usuario && <Usuario username ={usuario}/>}

        
        
    </div>

  )
};

export default Demo2;

