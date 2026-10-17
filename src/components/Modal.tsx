import { useState } from 'react'
import '../styles/modal.scss'
import type { NoteProps } from '../App'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    notes: NoteProps[]
    setNotes: React.Dispatch<React.SetStateAction<NoteProps[]>>
}

export function Modal({ isOpen, onClose, notes, setNotes }: ModalProps) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tag, setTag] = useState("")

    if (!isOpen) {
        return null
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const isMobile = window.matchMedia('(max-width: 768px)').matches
        setNotes([...notes, { title, content, tags: tag.split(',').map(t => t.trim()) , selected: notes.length === 0 && !isMobile, archived: false, createdAt: new Date() }])
        setTitle('')
        setContent('')
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title">Notes</h2>
                    <button className="modal__close" onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className="modal__body">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Note title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Note content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                        <label>Tags</label>
                        <input type='text' placeholder='Add tags separated by commas (e.g. Work, Planning)' onChange={(e) => setTag(e.target.value)} />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
