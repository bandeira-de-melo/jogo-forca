export default function Chute({inputDesligado}) {
    return(
        <div className="chute-container">
            <span>Já sei a palavra</span>
            <input disabled={inputDesligado}/>
            <button className="btn-chute">Chutar</button>
        </div>
    )
}