import Resultado from "./Resultado";
import './Css/resultados.css'
export default function ResultadosBusqueda() {
    
    return(
        <>
            <div>
                <fieldset>
                    <legend> Buscar Pelicula</legend>
                    <input type="text"/>
                </fieldset>    
            </div> 
            <div className="resultados">
                <Resultado />   
                <Resultado />   
                <Resultado />   
                <Resultado /> 
                <Resultado />   
                   
            </div>       
        
        
        </>
    );
}