import type { NoteProps } from "../App"

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
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.51318 4.97208C2.51562 3.79561 3.40507 2.74076 4.55965 2.54211C4.7964 2.50076 7.5734 2.50643 8.72233 2.50724C9.85909 2.50806 10.828 2.9167 11.6307 3.71777C13.335 5.41883 15.0377 7.12152 16.7379 8.82585C17.7441 9.83369 17.7579 11.3807 16.7558 12.3918C15.3101 13.8512 13.8571 15.3034 12.3985 16.749C11.3883 17.7504 9.84125 17.7374 8.83259 16.7312C7.11287 15.0163 5.39315 13.3014 3.68074 11.5793C3.01831 10.9129 2.62751 10.1077 2.54075 9.16636C2.47102 8.41394 2.51156 5.61667 2.51318 4.97208Z" stroke="#2B303B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.25593 6.9294C8.25268 7.65426 7.64702 8.2502 6.91487 8.24858C6.18757 8.24696 5.5819 7.64048 5.58596 6.91805C5.59082 6.164 6.18757 5.57618 6.94648 5.57942C7.66647 5.58185 8.25917 6.19239 8.25593 6.9294Z" stroke="#2B303B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Tags</span>
                                    <span>{selectedNote.tags.filter(t => t).join(', ') || '—'}</span>
                                </div>
                                <div className="app__editor-meta-row">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.16699 2.5C5.12919 2.5 2.66699 4.96219 2.66699 8C2.66699 11.0372 5.12923 13.5 8.16699 13.5C11.2048 13.5 13.667 11.0372 13.667 8C13.667 4.96219 11.2048 2.5 8.16699 2.5ZM1.66699 8C1.66699 4.40991 4.57691 1.5 8.16699 1.5C11.7571 1.5 14.667 4.40991 14.667 8C14.667 11.5894 11.7571 14.5 8.16699 14.5C4.57687 14.5 1.66699 11.5894 1.66699 8Z" fill="#2B303B" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.94824 5.21777C8.22438 5.21777 8.44824 5.44163 8.44824 5.71777V8.16619L10.3212 9.28553C10.5583 9.42719 10.6356 9.73419 10.494 9.97126C10.3523 10.2083 10.0453 10.2856 9.80824 10.1439L7.69171 8.87906C7.54071 8.78879 7.44824 8.62586 7.44824 8.44986V5.71777C7.44824 5.44163 7.67211 5.21777 7.94824 5.21777Z" fill="#2B303B" />
                                    </svg>
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
                        <button className="app__action-btn" onClick={() => console.log('archive')}>
                            Archive Note
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