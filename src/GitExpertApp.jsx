import  {useState} from 'react' //almacenar informacion y titne que cambiar el html

//import { AddCategory } from './components/AddCategory';
//import { GridGif } from './components/GifGrid';

import {GridGif,AddCategory} from './components'; //no se necesita el index por ser redundante

export const GifExpertApp=()=>{

    const [categories,setCategories] = useState(['One punch Man']); 

    const onAddCategory=(newcategory)=>{
    if (categories.includes(newcategory)) return;
        setCategories([newcategory,...categories]);
        //setCategories(c=>[newcategory,...categories]);
    }

    return(
        <>
        <h1>Gift Expert App</h1>
       <AddCategory  onNewCategory={onAddCategory} /> 
            {
            categories.map((category)=>  //no se usa el index 
                <GridGif  key={category} category={category}/>
            )} 
           
        </>
    ) 
}