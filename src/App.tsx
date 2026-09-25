
import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'

export type NoteProps = {
  title: string
  content: string
  selected: boolean
}

function App() {
  const [isOpen, setIsOpen] = useState(false

  )
  const [notes, setNotes] = useState<NoteProps[]>([])


  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="app">
      <aside className="app__sidebar">
        <h1 className="app__title">Notes</h1>
        <button className="app__add-btn" onClick={() => setIsOpen(true)}>Add Note</button>
        <div className="app__notes">
          {notes.map((note, index) => (
            <button key={index} className="app__note-title" onClick={() => {
              setNotes(notes.map((n, i) => ({ ...n, selected: i === index })))
            }}>
              {note.title}
            </button>
          ))}
        </div>
      </aside>
      <main className="app__content">
        <button className="app__back-btn" onClick={() => setNotes(notes.map(n => ({ ...n, selected: false })))}>
          ← Back
        </button>
        {notes.map((note, index) =>
          note.selected && (
            <div key={index}>
              <textarea
                className="app__note-content"
                value={note.content}
                onChange={(e) => setNotes(notes.map((n, i) => i === index ? { ...n, content: e.target.value } : n))}
              />
              <button className="app__delete-btn" onClick={() => {
                setNotes(notes.filter((_, i) => i !== index))
              }}>
                Delete Note
              </button>
            </div>
          )
        )}
      </main>
      <Modal isOpen={isOpen} onClose={handleClose} notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
