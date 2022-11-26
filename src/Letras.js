import { useState } from "react"



export default function Letras(props){
    
    function desabilitarLetra(letra){
        const novoArray = [...props.listaLetraDesabilitada, letra];
        let novoContador = 0;
        if(![...props.palavra].includes(letra)){
            novoContador = props.contadorErros + 1
            props.setContadorErros(novoContador)
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
        props.imagemForca(novoContador);
      }
    
    return(
        <div className="Letras">
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
           
        </div>
    )
}