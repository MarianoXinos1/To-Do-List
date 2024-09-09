import React, { useState } from 'react';
import './List.css'

interface Props {
    
    saveTodo: (title: string) => void
} 

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState('')

    //Envía el valor actual de inputValue a la función saveTodo y luego limpia el campo de entrada.
    const handleSubmit = ( event:  React.FormEvent<HTMLFormElement>) : void =>{
        event.preventDefault()
        saveTodo(inputValue)
        setInputValue('')

    }

    // Componente se actualice cada vez que el usuario escribe en el campo de entrada
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);                                                      // target =  se refiere al elemento que disparó el evento ( propiedad del objeto event que es nativo de los eventos del DOM en JavaScript)
    };


    return(
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                onChange={handleChange}                                                           //onChange = actualizar el estado del componente cuando el usuario escribe en el campo de entrada.
                placeholder="  What do you want to do?"
                autoFocus
            />
       </form>
    )
}
