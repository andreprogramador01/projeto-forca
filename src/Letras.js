import { useState } from "react"

let contadorErros=0;

export default function Letras(props){
    
    let contador=0;

    function desabilitarLetra(letra){
        const novoArray = [...props.listaLetraDesabilitada, letra];
        if(![...props.palavra].includes(letra)){
         
            contadorErros++;
            console.log(contadorErros);
        }
        if(!props.listaLetraDesabilitada.includes(letra)){
            
            props.setListaLetraDesabilitada(novoArray);
        }
        props.imagemForca(contadorErros);
      }
    
    return(
        <div className="Letras">
            {props.alfabeto.map(letra=>(
                <button disabled={!props.listaLetraDesabilitada.includes(letra) && props.desabilitado ? false:true} 
                        className={letra}  
                        key={letra}
                        onClick={() => desabilitarLetra(letra)}
                        
                >
                        {letra}
                </button>
            ))}
           
        </div>
    )
}