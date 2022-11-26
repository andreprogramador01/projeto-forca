
export default function Jogo(props){
    
   
    
    return(
        <>  
            <div className="Jogo">

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
            </div>
            

        </>
    )

}