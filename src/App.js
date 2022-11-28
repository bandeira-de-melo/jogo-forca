import React from 'react'
import {useState} from 'react'
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from './palavras'



function App() {
  const [palavraSorteada, setPalavraSorteada] = useState([])
  const [estadoBotes, setEstadoBotes] = useState(true);
  const [erros, setErros] = useState(0);
  return (
    <div className="App">
      <Jogo estadobtns ={estadoBotes} setEstadoBotes={setEstadoBotes} palavras={palavras} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}/>
      <Letras palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}/>
    </div>
  );
}

export default App;
