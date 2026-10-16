import type { NoteProps } from './../App'
import '../styles/Sidebar.css'
import { IconHome, IconTag } from './icons'

type SidebarProps = {
    notes: NoteProps[]
}

export const Sidebar = ({ notes }: SidebarProps) => {
    const allTags = [...new Set(notes.flatMap(n => n.tags).filter(t => t))]

    return (
        <section className="app__sidebar">
            <div className="app__title">Notes</div>
            <button className="sidebar__nav-item active">
                <IconHome className="sidebar__icon" />
                All Notes
            </button>
            <button className="sidebar__nav-item">Archived Notes</button>
            <div className="sidebar__separator"></div>
            <div className="sidebar__section-title">Tags</div>
            {allTags.map(tag => (
                <button key={tag} className="sidebar__tag-item">
                    <IconTag className="sidebar__icon" />
                    {tag}
                </button>
            ))}
        </section>
    )
}
