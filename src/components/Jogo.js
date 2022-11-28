import React from 'react'



export default function Jogo({setEstadoBotes, setPalavraSorteada, palavraSorteada, palavras}) {
    
    function habilitar(palavras){
        const pSorteada = palavras[Math.floor(Math.random() * palavras.length)]
        const arrPalavra = Array.from(pSorteada)
        setPalavraSorteada(arrPalavra)
    }

    return(
        <div className="jogo-main-container">
            <img src="https://via.placeholder.com/400" alt=''/>
            <div className="jogo-botao-palavra-container">
                <button className="btn-iniciar" onClick={()=>habilitar(palavras)} >Escolher Palavra</button>
                <div className="palavra-box">
                {palavraSorteada.map(caracter => <h1> _ </h1>)}
                </div>
            </div>
        </div>
    )
}