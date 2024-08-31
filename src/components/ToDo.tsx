import React from 'react'

interface Props {
    id: string
    title: string
    completed: boolean
} 

export const ToDo: React.FC<Props> = ({  title, completed }) => {
    return(
        <div  className="view">
            <input className="toggle"  type= 'checkbox' checked= {completed} onChange= {() => {}} />
            <label> {title} </label>
            <button className='destroy' onClick={ () => {} }/>
        </div>
    )
}