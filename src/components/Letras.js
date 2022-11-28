import React from 'react'

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({estadobtns, palavraSorteada, setPalavraSorteada}) {
    
    
    function tentativa(letra, palavraSorteada, setPalavraSorteada){
        const novapalavra = palavraSorteada.map(el => {
            if(letra === el){
                el = letra
            }

            setPalavraSorteada(novapalavra)
        })
        

    }

    return(
        <div className="botoes-letras-container">
            {
                alfabeto.map((letra, index) => (
                    <button key={index} disabled={estadobtns} className="botao-letras" onClick={()=>tentativa(letra, palavraSorteada, setPalavraSorteada)}>{letra}</button>
                ) )
            }
            
        </div>
    )
}