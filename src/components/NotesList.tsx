import type { NoteProps } from './../App'
import '../styles/NotesList.css'
import { IconPen } from './icons'

type NotesListProps = {
    notes: NoteProps[]
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>
    setIsOpen: (value: boolean) => void
    view: 'all' | 'archived'
}

export const NotesList = ({ notes, setNotes, setIsOpen, view }: NotesListProps) => {
    return (

        <section className="app__content">
            <div className="app__mobile-header">
                <div className="app__mobile-logo">
                    <IconPen />
                    Notes
                </div>
                <h1 className="app__mobile-page-title">All Notes</h1>
            </div>
            <div className="wrapper">
                <div className="app__content-header">
                    <button className="app__add-btn" onClick={() => setIsOpen(true)}>+ Create New Note</button>
                </div>
                <div className="app__notes">
                    {notes.filter(note => view === 'all' ? !note.archived : note.archived).map((note, index) => (
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
            </div>
        </section>
    )
}
