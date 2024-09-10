import React from 'react'
import { CreateTodo } from './CreateTodo'
import { ToDo } from './ToDo'
import './List.css'


export interface ListProps {
    lists: {id:number; title: string; completed:boolean}[]
    onRemoveList: (id: number) => void;                                                             //Al ser una funcion typescript me pide que indique si devulve algo o no.
    onToggleCompletedList: ({ id, completed }: { id: number, completed: boolean }) => void;
    onAddTodo: (title: string) => void
}

export const List: React.FC<ListProps> = ({ lists, onRemoveList, onToggleCompletedList, onAddTodo }) => {   // React.FC = Functional Component, es un tipo generico para recibir las <Props>

    return(
        <>
            <section className='tarjeta-principal'>
                <div className='tarjeta-principal_combo'>
                    <h1>Hello</h1>
                    <h2>Focus on the essentials! </h2>
                <CreateTodo saveTodo= {onAddTodo} />
                </div>

            </section>
            <section className='pepe'>
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
            </section>
        </>
    );
  };

  //https://github.com/tastejs/todomvc-app-css/blob/main/index.css