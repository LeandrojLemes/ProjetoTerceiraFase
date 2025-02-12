import './Demo1.css'
import { CgAddR } from "react-icons/cg";

function Demo1() {
  function responderClick(){
  alert("Resposta do Click")

  };

  return (
    <div className='container-demo1'>
     <button onClick={responderClick}>Adicionar</button>
     <button onClick={() => {alert("Adicionado a lista")}}> <CgAddR/> </button>
   

    </div>
  )
};

export default Demo1;