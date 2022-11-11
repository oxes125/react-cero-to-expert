import { useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>{ //hook funcion que regresa algo

    
    //estado local
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading] = useState(true)

    //perima practina de funciones en funcional component
    //cuando se renderiza de hace un http
    //no deve de redibujar
    //useEfect //efectos secundarios//proceso cuando algo suceda // se renderiza ejecuta efectos

    useEffect(()=>{   //callback es una funcion y useEfect no se puede user el async es una pesima practica
        //   getGifs(category).then(newImages=>setImages(newImages)); 
           getImages();//esto se puede
       },[])//solo se dispara la primera vez cusndo se construlle  el componente
   
       
    const getImages=async()=>{
        const newImages=await(getGifs(category));
        setImages(newImages);
        setIsLoading(false);
    }


    return{
        images,
        isLoading
    }
}
