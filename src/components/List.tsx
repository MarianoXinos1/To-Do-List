import React from 'react'
import { ToDo } from './ToDo'
import './List.css'

export interface ListProps {
    lists: {id:number; title: string; completed:boolean}[]
    onRemoveList: (id: number) => void;                                                             //Al ser una funcion typescript me pide que indique si devulve algo o no, void = no
    onToggleCompletedList: ({ id, completed }: { id: number, completed: boolean }) => void;
}

export const List: React.FC<ListProps> = ({ lists, onRemoveList, onToggleCompletedList }) => {

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
                                onToggleCompletedList = { onToggleCompletedList }
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
  };

  //https://github.com/tastejs/todomvc-app-css/blob/main/index.css