import React, { useState } from 'react'
import { List } from './components/List'
import './App.css'


const mockupList = [
  {
    id:'1',
    title:'todo 1',
    completed:false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: true
  },
  {
    id: '3',
    title: 'todo 3',
    completed: true
  }
]


function App() {

  const [list, setList] = useState(mockupList)

  return (
    <List lists={list} />
  )
}

export default App
