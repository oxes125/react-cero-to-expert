export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=cqIWG3rlEuz3EDZHskPdvYRGBHZBkl21&q=${category}&limit=10`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    //id,url,
    const gifs=data.map(img=>({ //un oibjeto ()
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }) 
    )

    return gifs; //me marco error del maps sin el return
}