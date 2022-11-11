

//js Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax

//*cambiar jsx porque titnt html
export const GifItem=({title,url})=>{
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
            </div>
    )
}