import Jogo from "./Jogo"
import Letras from "./Letras"
import Chute from "./Chute";
import palavras from "./palavras";
import { useState } from "react";


export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
                    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]  

  const [desabilitado, setDesabilitado] = useState(false)

  const [listaLetraDesabilitada, setListaLetraDesabilitada ] = useState([]);

  const [forcaImagem, setForcaImagem] = useState('./assets/forca0.png');

  let errouALetra = false;
  let contador = 0;
  function letraCorreta(letra){
        
    if (listaLetraDesabilitada.includes(letra)){
     
        return true
        
      }else{     
        return false
    }
  }
  function imagemForca(contador){
    setForcaImagem(`./assets/forca${contador}.png`)
    
  }

  return (
    <div className="App">
      <Jogo palavra={palavras[1]}
            letraCorreta={letraCorreta} 
            setDesabilitado={setDesabilitado}
            listaLetraDesabilitada={listaLetraDesabilitada}
            imagemForca={imagemForca}
            forcaImagem={forcaImagem}
      />
            
      <Letras desabilitado={desabilitado}
              listaLetraDesabilitada={listaLetraDesabilitada}
              setListaLetraDesabilitada={setListaLetraDesabilitada}  
              alfabeto={alfabeto}
              palavra={palavras[1]}
              imagemForca={imagemForca}
              forcaImagem={forcaImagem}
              />

      <Chute desabilitado={desabilitado}/>
    </div>
  );
}

