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

  const [palavraChutada,setPalavraChutada] = useState('');

  let [venceu,setVenceu] = useState(''); 
  
  const [palavra, setPalavra] = useState('')

  const [contadorErros, setContadorErros] = useState(0);

  let [acertos,setAcertos] = useState([])

  function randomizar(opcoes) { 
    return opcoes[Math.floor(Math.random() * opcoes.length)]
  }
  function habilitarLetras(){
    let novaPalavra = randomizar(palavras)
    setDesabilitado(true);

    setPalavra(novaPalavra)
    console.log(novaPalavra)
    setVenceu('')
    setListaLetraDesabilitada([])
    setPalavraChutada('')
    setContadorErros(0);
    imagemForca(0);
    setAcertos([])
  }
  function letraCorreta(letra){
        
    if (listaLetraDesabilitada.includes(letra)){
        
        return true
       
      }else{ 
        
        return false
    }
  }
  function imagemForca(contador){
    if(contador===6){
      setVenceu(false)
      setDesabilitado(false)
    }
    setForcaImagem(`./assets/forca${contador}.png`)
    
  }
  function chutar(){
    if(palavraChutada == palavra){
    
      setVenceu(true)
      setDesabilitado(false)
    }else{
      
      setVenceu(false)
      setDesabilitado(false)
      setForcaImagem(`./assets/forca6.png`)
    }
  }

  return (
    <div className="App">
      <Jogo palavra={palavra}
            letraCorreta={letraCorreta} 
            setDesabilitado={setDesabilitado}
            listaLetraDesabilitada={listaLetraDesabilitada}
            imagemForca={imagemForca}
            forcaImagem={forcaImagem}
            venceu={venceu}
            habilitarLetras={habilitarLetras}
      />
            
      <Letras desabilitado={desabilitado}
              setDesabilitado={setDesabilitado}
              listaLetraDesabilitada={listaLetraDesabilitada}
              setListaLetraDesabilitada={setListaLetraDesabilitada}  
              alfabeto={alfabeto}
              palavra={palavra}
              setVenceu={setVenceu}
              imagemForca={imagemForca}
              forcaImagem={forcaImagem}
              setContadorErros={setContadorErros}
              contadorErros={contadorErros}
              setAcertos={setAcertos}
              acertos={acertos}
              />

      <Chute  palavraChutada={palavraChutada} 
              setPalavraChutada={setPalavraChutada} 
              desabilitado={desabilitado}
              chutar={chutar}
              
              />
    </div>
  );
}

