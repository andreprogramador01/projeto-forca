export default function Jogo(){
    return(
        <>  
            <div className="Jogo">

                <div className="topo">
                    <img className="imgForca" src="./assets/forca0.png" />
                    
                    
                </div>
                <div className="escolher">
                    <button className="escolher-palavra">Escolher Palavra</button>
                    <ul className="palavra">
                        <li className="letra">
                        </li>
                        <li className="letra">
                        a 
                        </li>
                        <li className="letra">
                            a
                        </li>

                    </ul>            
                </div>
            </div>
            

        </>
    )

}