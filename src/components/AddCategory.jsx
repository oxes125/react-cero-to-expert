import { useState } from "react"

export const AddCategory=({onNewCategory})=>{  

    const[inputValue,setInputValue]=useState('');
    
    const onInputchange=({target})=>{
        setInputValue(target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault(); 
        if(inputValue.trim().length<=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
      <form onSubmit={onSubmit}>  
      <input type='text'
      value={inputValue}
        onChange={onInputchange}
      placeholder='Buscar Gifs'/>
    </form>
    )
}
