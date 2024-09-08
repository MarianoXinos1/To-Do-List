import React from 'react'

interface Props {
    id: number
    title: string
    completed: boolean
    onRemoveList: (id: number) => void; 
    onToggleCompletedList: (params: { id: number, completed: boolean }) => void;
} 

export const ToDo: React.FC<Props> = ({  id, title, completed, onRemoveList, onToggleCompletedList  }) => {


    return(
        <div  className="view">
            <input className="toggle"  type= 'checkbox' checked= {completed}
                    onChange= {(event) => { onToggleCompletedList({ id, completed: event.target.checked }) }} />

            <label> {title} </label>
            <button className='destroy' onClick={ () => { onRemoveList(id)} } />
        </div>
    )
}