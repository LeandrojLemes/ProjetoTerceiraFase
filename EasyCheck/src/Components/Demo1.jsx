import './Demo1.css'

function Demo1() {
  function responderClick(){
  alert("Resposta do Click")

  };

  return (
    <div className='container-demo1'>
     <button onClick={responderClick}>Clique aqui</button>
     <button onClick={() => {alert("Flecha")}}> ➡ </button>
     <img src="./Imagens/logo.svg" alt="" />
    </div>
  )
};

export default Demo1;