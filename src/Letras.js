import { useState } from "react"
import styled from "styled-components";



export default function Letras(props){
    
    function desabilitarLetra(letra){
        const novoArray = [...props.listaLetraDesabilitada, letra];
        let novoContador = 0;
        if(![...props.palavra].includes(letra)){
            novoContador = props.contadorErros + 1
            props.setContadorErros(novoContador)
            props.imagemForca(novoContador);
        }else{
            props.setAcertos([...props.acertos,letra]);
            const arr3 = [...props.palavra].filter( x => { 
                return JSON.stringify([...props.acertos,letra]).indexOf(JSON.stringify(x)) < 0;
              });
              console.log(arr3.length);
             if(arr3.length===0){
                props.setVenceu(true)
                props.setDesabilitado(false)
             }
              
        }
        if(!props.listaLetraDesabilitada.includes(letra)){
            
            props.setListaLetraDesabilitada(novoArray);
        }
        
      }
    
    return(
        <Letras1>
            {props.alfabeto.map(letra=>(
                <button disabled={!props.listaLetraDesabilitada.includes(letra) && props.desabilitado ? false:true} 
                        className={letra}  
                        key={letra}
                        data-test="letter"
                        onClick={() => desabilitarLetra(letra)}
                        
                >
                        {letra.toUpperCase()}
                </button>
            ))}
           
        </Letras1>
    )
}

const Letras1 = styled.div`
    width: 680px;
    margin-left:211px;
    button{
        background: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        margin-right:12px;
        width: 40px;
        height: 40px;
        margin-bottom:10px;
    }
}

`