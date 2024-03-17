import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifApp = () => {
    const [categories, setCategories] = useState(['']);

    return (
        <div>
            <h2 >GifApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            
            <ol>
                
                {
                   categories.map(category =>(
                    <GifGrid 
                    key= {category}
                    
                    category = {category}
                    
                    />
                   ))        
                }
            </ol>






















        </div>
    );
}
