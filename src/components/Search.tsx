import '../styles/Search.css'
import { IconSearch } from './icons'

export const Search = () => {
    const isArchived = true
    return (
        <div className="app__search-header">
            {
                isArchived && <h3>Archived Notes</h3>
            }
             {
                !isArchived && <h3>All Notes</h3>
            }

            <div className="search__input-wrapper">
                <IconSearch className="search__icon" />
                <input className="search__input" type="text" placeholder="Search by title, content, or tags…" />
            </div>

        </div>
    )
}