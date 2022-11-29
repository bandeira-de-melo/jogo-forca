import React from 'react'
import alfabeto from "../alfabeto"


export default function Letras({letrasSelecionadas}) {
    
    return(
        <div className="botoes-letras-container">
            {
                alfabeto.map((letra, index) => (
                    <button key={index} disabled={letrasSelecionadas.includes(letra)} className="botao-letras" >{letra}</button>
                ) )
            }
            
        </div>
    )
}

