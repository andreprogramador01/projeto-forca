export default function Jogo(props){
    let errouALetra = false;
    
    function habilitarLetras(){
        props.setDesabilitado(true);
    }
    
    
    return(
        <>  
            <div className="Jogo">

                <div className="topo">
                    <img className="imgForca" src={props.forcaImagem} />
                    
                    
                </div>
                <div className="escolher">
                    <button className="escolher-palavra" onClick={habilitarLetras}>Escolher Palavra</button>
                    <ul className="palavra">
                        {[...props.palavra].map((p, index) =>(
                        
                        <li key={index} className={"letra"}>
                            {props.letraCorreta(p) ? p : "_"}
                        </li>
                        ))}
                        
                        
                        
                    </ul>            
                </div>
            </div>
            

        </>
    )

}