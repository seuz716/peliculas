import "./Css/resultado.css"
export default function Resultado(){

    function handleClick(evento) {
        evento.stopPropagation();
        alert("Mostrar detalle de la pélicula....");
        
        
    }

    return(
        <>
            <div className="resumen" onClick={handleClick}>
                <div className="resumen-img">
                    <img src="https://i.blogs.es/48726a/spiderman-homecoming-poster/450_1000.jpg"></img>    
                </div>
                <div>
                    <h1>Nombre de pelicula</h1>
                </div>
                <div>
                    <p>resumen</p>   
                </div>
                <div>
                    <span>Rating</span>
                    <i></i>    
                </div>
            </div> 
        </>

    );
}