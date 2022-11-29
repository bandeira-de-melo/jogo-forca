import React from 'react'
import imagem0 from "../assets/forca0.png"


export default function Jogo() {
      
    return(
        <div className="jogo-main-container">
            <img className="img-forca" src={imagem0} alt=''/>
            <div className="jogo-botao-palavra-container">
                <button className="btn-iniciar" >Escolher Palavra</button>
                <div className="palavra-box">
                <h1 class="">_ _ _ _</h1>
                </div>
            </div>
        </div>
    )
}
