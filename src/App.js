import React from 'react'
import {useState} from 'react'
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import alfabeto from "./alfabeto";




function App() {
  const [inputDesligado, setInputDesigado] = useState(true)
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([])
  return (
    <div className="App">

      <Jogo />

      <Letras letrasSelecionadas={letrasSelecionadas}/>
      
      <Chute inputDesligado={inputDesligado}/>

    </div>
  );
}

export default App;
