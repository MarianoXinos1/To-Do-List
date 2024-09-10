import { useState } from 'react'
import { List } from './components/List'
import './App.css'


const mockupList = [
  {
    id: 1,
    title:'Daily Tasks:',
    completed:false
  },

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
    const newLists = list.map(lista =>{
      if(lista.id === id){
        return{
          ...lista,                                                                         
          completed             // Sobrescribe la propiedad completed con el valor proporcionado.
        }
      }
      return lista
    });
    setList(newLists);
  };


  const handleAddTodo = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    };
    const newTodos = [...list, newTodo];
    setList(newTodos);
  };


  return (
   
    <section className='contenedor'>
      <List
        onAddTodo={handleAddTodo}
        onToggleCompletedList = {elementCompleted}
        lists = {list}
        onRemoveList = {elementRemove} 
      />
    </section>
    
  )
}

export default App


