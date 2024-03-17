import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif();
  }, [category]); 



  const getGif = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=ackXo1kyr54IFDbUvuNuTpqrNnODNpEg&q=${category}&limit=10`;
      const resp = await fetch(url);
      const { data } = await resp.json();

      
      const gif = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium?.url || img.url,
      }));
  
      

      setImages(gif);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
   
    
  }
  };


  return (
    <>
    <h3>{category}</h3>
    <div className='cardGrid'>
      
      {
      images.map(img => (
        <GifGridItem 
        key={img.id}
        {...img}/>
     
      ))}

    </div>
    </>
  );
};
