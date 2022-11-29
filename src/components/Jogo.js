import React from 'react'
import imagem0 from "../assets/forca0.png"
import imagem1 from "../assets/forca1.png"
import imagem2 from "../assets/forca2.png"
import imagem3 from "../assets/forca3.png"
import imagem4 from "../assets/forca4.png"
import imagem5 from "../assets/forca5.png"
import imagem6 from "../assets/forca6.png"


export default function Jogo({jogar, erros, palavraSorteada}) {
    
    const imagens = [imagem0,imagem1,imagem2,imagem3,imagem4,imagem5,imagem6]
    
    return(
        <div className="jogo-main-container">
            <img className="img-forca" src={imagens[erros]} alt=''/>
            <div className="jogo-botao-palavra-container">
                <button className="btn-iniciar" onClick={jogar}>Escolher Palavra</button>
                <div className="palavra-box">
                <h1 className="">{palavraSorteada}</h1>
                </div>
            </div>
        </div>
    )
}
