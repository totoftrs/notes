import { useEffect, useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'
import { Sidebar } from './components/Sidebar'
import { NotesList } from './components/NotesList'
import { EditNotes } from './components/EditNotes'
import { BottomNav } from './components/BottomNav'
import { Search } from './components/Search'

export type NoteProps = {
  title: string
  content: string
  selected: boolean
  createdAt: Date
  archived: boolean
  tags: string[]
}

function App() {
  const saved = localStorage.getItem('notes')
  const init = saved ? JSON.parse(saved) : []
  const [isOpen, setIsOpen] = useState(false)
  const [notes, setNotes] = useState<NoteProps[]>(init)
  const [view, setView] = useState<'all' | 'archived'>('all')


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    setNotes(prev => prev.map(n => ({ ...n, selected: false })))
  }, [view])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="app">
      <Sidebar notes={notes} view={view} setView={setView} />
      <Search />
      <NotesList notes={notes} setNotes={setNotes} setIsOpen={setIsOpen} view={view} />
      <EditNotes notes={notes} setNotes={setNotes} />
      <Modal isOpen={isOpen} onClose={handleClose} notes={notes} setNotes={setNotes} />
      <BottomNav />
      <button className="app__fab" onClick={() => setIsOpen(true)}>+</button>
    </div>
  )
}

export default App
