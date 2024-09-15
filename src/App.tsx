import { useEffect, useState } from 'react'
import { List } from './components/List'
import './App.css'

interface TodoItem {
  id: number,
  title:string,
  completed: boolean
}

const mockupList:TodoItem[] = [
  {
    id: 1,
    title:'Daily Tasks:',
    completed:false
  },

]


function App() {


  const [list, setList] = useState<TodoItem[]>(()=> {                           
    try{
    //Recupera del localStorage                                      //No tiene sentido que lo ponga en el useEffect, para evitar cada renderizado.
    const savedList = localStorage.getItem('todoList');             
    return savedList ? JSON.parse(savedList) : mockupList;         
    }
    catch (error){
      console.log('Error loading list from localStorage',error)
      return mockupList
    }

  })


  //Guardar lista en localStorage cada vez que cambie.
  useEffect(() => {
    try{
      localStorage.setItem('todoList', JSON.stringify(list))          //localStorage al ser una APIs debe ser almacenado como cadena texto.
    } catch (error){
      console.log('Error saving list to localStorage',error);
    }
  
  }, [list])


  //Filtra para borrar mi elemento de id dif
  const elementRemove = (id: number) => {                                   
    const newToDo = list.filter(lista => lista.id !== id);   
    setList(newToDo);
  }

  //Actualiza tarea como completada o no cambiando su completed
  const elementCompleted = ({ id, completed }: { id: number, completed: boolean }) => {
    const newLists = list.map(lista =>{
      if(lista.id === id){
        return{
          ...lista,                                                                         
          completed           // Sobrescribe la propiedad completed con el valor proporcionado.
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


