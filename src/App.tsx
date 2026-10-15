import { useEffect, useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'

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

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleClose = () => {
    setIsOpen(false)
  }

  const selectedNote = notes.find(n => n.selected)
  const selectedIndex = notes.findIndex(n => n.selected)
  const allTags = [...new Set(notes.flatMap(n => n.tags).filter(t => t))]
  return (
    <div className="app">

      {/* Colonne 1 — Navigation */}
      <section className="app__sidebar">
        <div className="app__title">Notes</div>
        <button className="sidebar__nav-item active">All Notes</button>
        <button className="sidebar__nav-item">Archived Notes</button>
        <div className="sidebar__separator"></div>
        <div className="sidebar__section-title">Tags</div>
        {allTags.map(tag => (
          <button key={tag} className="sidebar__tag-item">{tag}</button>
        ))}
      </section>


      {/* Colonne 2 — Liste des notes */}
      <section className="app__content">
        <div className="app__content-header">
          <button className="app__add-btn" onClick={() => setIsOpen(true)}>+ Create New Note</button>
        </div>
        <div className="app__notes">
          {notes.map((note, index) => (
            <button
              key={index}
              className={`app__note-item ${note.selected ? 'active' : ''}`}
              onClick={() => setNotes(notes.map((n, i) => ({ ...n, selected: i === index })))}
            >
              <span className="app__note-item-title">{note.title}</span>
              <div className="app__note-item-tags">
                {note.tags.filter(t => t).map((tag, i) => (
                  <span key={i} className="app__note-item-tag">{tag}</span>
                ))}
              </div>
              <span className="app__note-item-date">
                {new Date(note.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Colonne 3 — Éditeur */}
      <section className="app__editor">
        {!selectedNote ? (
          <div className="app__editor-empty">Sélectionne une note pour l'éditer</div>
        ) : (
          <>
            <div className="app__editor-header">
              <input
                className="app__note-title-input"
                value={selectedNote.title}
                onChange={(e) => setNotes(notes.map((n, i) => i === selectedIndex ? { ...n, title: e.target.value } : n))}
              />
              <div className="app__editor-meta">
                <div className="app__editor-meta-row">
                  <span>Tags</span>
                  <span>{selectedNote.tags.filter(t => t).join(', ') || '—'}</span>
                </div>
                <div className="app__editor-meta-row">
                  <span>Créée le</span>
                  <span>{new Date(selectedNote.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
            <textarea
              className="app__note-content"
              value={selectedNote.content}
              onChange={(e) => setNotes(notes.map((n, i) => i === selectedIndex ? { ...n, content: e.target.value } : n))}
            />
            <div className="app__editor-footer">
              <button className="app__delete-btn" onClick={() => setNotes(notes.filter((_, i) => i !== selectedIndex))}>
                Delete Note
              </button>
            </div>
          </>
        )}
      </section>

      <Modal isOpen={isOpen} onClose={handleClose} notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
