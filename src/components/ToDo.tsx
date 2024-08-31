import React from 'react'

interface Props {
    id: string
    title: string
    completed: boolean
    onRemoveList: (id: string) => void; 
} 

export const ToDo: React.FC<Props> = ({  id, title, completed, onRemoveList  }) => {
    return(
        <div  className="view">
            <input className="toggle"  type= 'checkbox' checked= {completed} onChange= {() => {}} />
            <label> {title} </label>
            <button className='destroy' onClick={ () => { onRemoveList(id)} } />
        </div>
    )
}