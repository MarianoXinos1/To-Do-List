import React from 'react'
import { ToDo } from './ToDo'
import './List.css'

interface ListProps {
    lists: {id:string; title: string; completed:boolean}[]
    onRemoveList: (id: string) => void;                         //Al ser una funcion typescript me pide que indique si devulve algo o no, void = no
}

export const List: React.FC<ListProps> = ({ lists, onRemoveList }) => {

    return(
        <>
            <section className='tarjeta-principal'>
                <div>
                    <h2>Hola</h2>
                    <h1>Focus on the essentials!</h1>
                    <p> pepepe</p>
                </div>

            </section>
            <ul className='tarjeta-secun'>
                {lists.map((list) => {
                    return (
                        <li key = {list.id}  className= { `${list.completed ? 'completed' : '' }` }>
                            <ToDo
                                key = {list.id}
                                id = {list.id}
                                title = {list.title}
                                completed = {list.completed}
                                onRemoveList  = {onRemoveList}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
  };

