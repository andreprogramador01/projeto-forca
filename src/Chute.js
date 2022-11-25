export default function Chute(props){
    return(
        <div className="Chute">
            <span>Já sei a palavra! </span> <input type="text"></input>
            <button disabled={props.desabilitado ? false : true}>Chutar</button>
        </div>
    )
}