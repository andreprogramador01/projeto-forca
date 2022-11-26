export default function Chute(props){
    return(
        <div className="Chute">
            <span>Já sei a palavra! </span> <input data-test="guess-input" disabled={props.desabilitado ? false : true} value={props.palavraChutada} onChange={(e)=>props.setPalavraChutada(e.target.value)} type="text"></input>
            <button disabled={props.desabilitado ? false : true} data-test="guess-button" onClick={props.chutar} >Chutar</button>
        </div>
    )
}