import type { NoteProps } from "../App"
import '../styles/EditNotes.css'
import { IconTag, IconClock } from './icons'

type EditNotesProps = {
    notes: NoteProps[]
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>
}


export const EditNotes = ({ notes, setNotes }: EditNotesProps) => {
    const selectedNote = notes.find(n => n.selected)
    const selectedIndex = notes.findIndex(n => n.selected)
    return (
        <section className="app__editor">
            {!selectedNote ? (
                <div className="app__editor-empty">Sélectionne une note pour l'éditer</div>
            ) : (
                <div className="app__editor-inner">

                    {/* Contenu principal */}
                    <div className="app__editor-main">
                        <div className="app__editor-header">
                            <input
                                className="app__note-title-input"
                                value={selectedNote.title}
                                onChange={(e) => setNotes(notes.map((n, i) => i === selectedIndex ? { ...n, title: e.target.value } : n))}
                            />
                            <div className="app__editor-meta">
                                <div className="app__editor-meta-row">
                                    <IconTag />
                                    <span>Tags</span>
                                    <span>{selectedNote.tags.filter(t => t).join(', ') || '—'}</span>
                                </div>
                                <div className="app__editor-meta-row">
                                    <IconClock />
                                    <span>Last edited</span>
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
                            <button className="app__save-btn">Save Note</button>
                            <button className="app__cancel-btn">Cancel</button>
                        </div>
                    </div>

                    {/* Actions droite */}
                    <div className="app__editor-actions">
                        <button className="app__action-btn" onClick={() => setNotes(notes.map((n, i) => i === selectedIndex ? { ...n, archived: !selectedNote.archived } : n))}>
                            {selectedNote.archived ? "Restore Note" : "Archive Note"}

                        </button>
                        <button className="app__action-btn app__action-btn--delete" onClick={() => setNotes(notes.filter((_, i) => i !== selectedIndex))}>
                            Delete Note
                        </button>
                    </div>

                </div>
            )}
        </section>
    )
}
