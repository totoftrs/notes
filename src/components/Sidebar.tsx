import type { NoteProps } from './../App'

type SidebarProps = {
  notes: NoteProps[]
}

export const Sidebar = ({ notes }: SidebarProps) => {
  const allTags = [...new Set(notes.flatMap(n => n.tags).filter(t => t))]

  return (
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
  )
}