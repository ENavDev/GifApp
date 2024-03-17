import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, SetValue] = useState('');
   
    const handleInputChange = (e) => {
        SetValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //previene el refresh de la pagina     
        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue,...cats]); //callback
            SetValue('');
            console.log('submit hecho')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Buscar'
                    type='search'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

AddCategory.prototype ={
    setCategories: Proptypes.func.isRequired //dice el tipo de dato que se espera o que el argumento sea requerido
}
