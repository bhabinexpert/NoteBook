import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreateNotes from './pages/CreateNotes'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div data-theme = "retro">
      <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/create' element = {<CreateNotes/>} />
        <Route path='/note/:id' element = {<NoteDetails/>} />
      </Routes>
      
    </div>
  )
}

export default App
