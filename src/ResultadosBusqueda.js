import Resultado from "./Resultado";
import './Css/resultados.css'
export default function ResultadosBusqueda() {

        function handleChange(event){
            evento.preventDefault();
            

        }
    
    return(
        <>
            <div className="busqueda">
                <fieldset>
                    <legend> Buscar Pelicula</legend>
                    <div>
                        <input type="text" name="busqueda" id="busqueda"/>
                    </div>
                </fieldset>    
             </div> 
             
             <div>    
                 <fieldset>
                    <legend> Listado Péliculas</legend>
                     <div className="resultados">
                        <Resultado />   
                        <Resultado />   
                        <Resultado />   
                        <Resultado /> 
                        <Resultado /> 
                        <Resultado />     
                    </div>       
                </fieldset>
            </div>
        </>
    );
}