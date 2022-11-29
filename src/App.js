import React from 'react'
import {useState} from 'react'
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import alfabeto from "./alfabeto";
import palavras from "./palavras";

function App() {
  const [inputDesligado, setInputDesigado] = useState(true)
  const [letrasSelecionadas, setLetrasSelecionadas] = useState(alfabeto)
  const [erros, setErros] = useState(0)
  const [palavraSorteada, setPalavraSorteada] = useState([])
  const [palavraSelecionada, setPalavraSelecionada] = useState([])
  function jogar(){
    sorteio()
    setInputDesigado(false)
    setLetrasSelecionadas([])
  }

  function sorteio(){
    const indice = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[indice]
    const palavraSeparada = palavra.split("")
    setPalavraSelecionada(palavraSeparada)

    let tracos = []
    palavraSeparada.forEach(()=> tracos.push(" _"))
    setPalavraSorteada(tracos)

  }


  return (
    <div className="App">

      <Jogo jogar={jogar} erros={erros} palavraSorteada={palavraSorteada}/>

      <Letras letrasSelecionadas={letrasSelecionadas}/>
      
      <Chute inputDesligado={inputDesligado}/>

    </div>
  );
}

export default App;
