import styled from "styled-components"

export default function Jogo(props){
    
   
    
    return(
        <>  
            <Jogo1>

                <div className="topo">
                    <img className="imgForca" data-test="game-image" src={props.forcaImagem} />
                    
                    
                </div>
                <div className="escolher">
                    <button className="escolher-palavra" data-test="choose-word" onClick={props.habilitarLetras}>Escolher Palavra</button>
                    <ul className="palavra" data-test="word" data-answer={props.palavra}>
                        {[...props.palavra].map((p, index) =>(
                        props.venceu !== '' ? (
                                <li key={index} style={props.venceu ? {color:'green'}: {color:'red'}}  className={"letra"}>
                                    { p }
                                </li>)
                                :(
                                 <li key={index} className={"letra"}>
                                    {props.letraCorreta(p) ? p : "_"}
                                </li>)
                        ))}
                        
                        
                        
                    </ul>            
                </div>
            </Jogo1>
            

        </>
    )

}

const Jogo1 = styled.div`
    display: flex;
    .topo{
        display: flex;
    }
    .imgForca{
        width: 400px;
    }
    .escolher{
    flex-direction: column;
    }
    .escolher-palavra{
        width: 200px;
        height: 60px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #27ae60;
        color:#FFFFFF;
        margin-left:334px;
        margin-top: 89px;
    }
    .palavra{
        display: flex;
        height: 15px;
        margin-left:203px;
        margin-top:282px;
        

    }
    .letra{
        width: 10px;
        margin-left:10px;
    }

`