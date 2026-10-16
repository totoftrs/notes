import type { NoteProps } from './../App'
import '../styles/NotesList.css'

type NotesListProps = {
  notes: NoteProps[]
  setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>
  setIsOpen: (value: boolean) => void
}

export const NotesList = ({ notes, setNotes, setIsOpen }: NotesListProps) => {
    return (

      <section className="app__content">
        <div className="app__mobile-header">
          <div className="app__mobile-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Notes
          </div>
          <h1 className="app__mobile-page-title">All Notes</h1>
        </div>
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
    )
}