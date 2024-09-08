import React, { useState } from 'react'
import { List } from './components/List'


import './App.css'


const mockupList = [
  {
    id: 1,
    title:'Curso Figma',
    completed:false
  },
  {
    id: 2,
    title: 'Cenar con mi bb',
    completed: false
  },
  {
    id: 3,
    title: 'GYM',
    completed: true
  }
]


function App() {

  const [list, setList] = useState(mockupList)

  //Filtra para borrar mi elemento de id dif
  const elementRemove = (id: number) => {                                   
    const newToDo = list.filter(list => list.id !== id);   
    setList(newToDo);
  }

  //Actualiza tarea como completada o no cambiando su completed
  const elementCompleted = ({ id, completed }: { id: number, completed: boolean }) => {
    const newLists = list.map(list =>{
      if(list.id === id){
        return{
          ...list,                                                                         
          completed                                                                  // si list esta false aca la va a sobrescribirla por el parametro que pusiste(ya sea false o true).
        }
      }
      return list
    });
    setList(newLists);
  };

  return (
    <section className='contenedor'>
      <List
        onToggleCompletedList = {elementCompleted}
        lists = {list}
        onRemoveList = {elementRemove} 
      />
    </section>
  )
}

export default App


