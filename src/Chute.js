import styled from "styled-components"

export default function Chute(props){
    return(
        <Chute1>
            <span>Já sei a palavra! </span> <input data-test="guess-input" disabled={props.desabilitado ? false : true} value={props.palavraChutada} onChange={(e)=>props.setPalavraChutada(e.target.value)} type="text"></input>
            <button disabled={props.desabilitado ? false : true} data-test="guess-button" onClick={props.chutar} >Chutar</button>
        </Chute1>
    )
}
const Chute1 = styled.div`

    margin-top:56px;
    display: flex;
    margin-left:231px;

span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
}
input{
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    width: 353px;
    height: 40px;
    margin-left:12px;
}
button{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    width: 100px;
    height: 40px;
    text-align: center;
    margin-left:15px;
    
    color: #3C76A1;
}
`