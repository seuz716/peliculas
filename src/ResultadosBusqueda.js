import { useState} from "react";
import Resultado from "./Resultado";
import './Css/resultados.css'

export default function ResultadosBusqueda() {
    const [busqueda, setBusqueda] = useState("");
    const[resultados, setResultados] = useState([]);
        function handleChange(evento){
            evento.preventDefault();
            console.log("Texto de búsqueda "+ evento.target.value);
            let tituloPelicula = evento.target.value;
            if (tituloPelicula.length >= 3){
                //Todo conectar a la api
                let resultadosBusquedas =  new Array(tituloPelicula.length).fill(0);
                setResultados(resultadosBusquedas);
            }
            else{
                setResultados([]);
            }
            setBusqueda(tituloPelicula);
            
        }
    
    return(
        <>
            <div className="busqueda">
                <fieldset>
                    <legend> Buscar Pelicula</legend>
                    <div>
                        <input type="text" name="busqueda" id="busqueda" onChange={handleChange}/>
                    </div>
                </fieldset>    
             </div> 
             
             <div>    
                 <fieldset>
                    <legend> Listado Péliculas</legend>
                     <div className="resultados">
                            {
                                resultados && resultados.length > 0  && resultados.map(resultado => (
                                        <>
                                             <Resultado />
                                        </>
                             ))}
                    </div>       
                </fieldset>
            </div>
        </>
    );
}