import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNotes from './pages/CreateNotes'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div data-theme = "forest">
    
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/create' element = {<CreateNotes/>} />
        <Route path='/note/:id' element = {<NoteDetails/>} />
      </Routes>
      
    </div>
  )
}

export default App
