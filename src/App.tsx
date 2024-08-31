import React, { useState } from 'react'
import { List } from './components/List'
import './App.css'


const mockupList = [
  {
    id:'1',
    title:'Curso Figma',
    completed:false
  },
  {
    id: '2',
    title: 'Cenar con mi bb',
    completed: false
  },
  {
    id: '3',
    title: 'GYM',
    completed: true
  }
]


function App() {

  const [list, setList] = useState(mockupList)

  //Filtra para borrar mi elemento de id dif
  const elementRemove = (id: string) => {                                   
    const newToDo = list.filter(list => list.id !== id);   
    setList(newToDo);
  }

  return (
    <section className='contenedor'>
      <List
        lists = {list}
        onRemoveList = {elementRemove} 
      />
    </section>
  )
}

export default App
