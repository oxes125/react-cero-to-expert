import { useFetchGifs } from "../hooks/useFetchGifs.js";
import { GifItem } from "./GifItem.jsx";

export const GridGif=({category})=>{

    const {images, isLoading} = useFetchGifs(category); //{} objeto //custom hook

    return (
        <>
        <h3>{category}</h3>

        { 
        //isLoading ? ( <h2 >Cargando...</h2>) : null     //null no se renderiaza 
        //<loadingMessage isLoading={isLoading} /> //otra manera de hacerlo es por componente
       isLoading && ( <h2 >Cargando...</h2>)  //
       
        }

        <div className="card-grid"> {/*no se puede usar class se use classname*/}
            {
                images.map((image)=>( // esto usa el return implicito () objeto ({ }) desestructuracion objeto
                    <GifItem key={image.id}
                     {...image} /> //esparcir las properties spread operator
                ))
            }
           </div>
        
        </>
    )
}