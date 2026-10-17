import { useCallback } from 'react'
import '../styles/Search.css'
import { IconSearch } from './icons'


export type SearchProps = {
    view: 'all' | 'archived'
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search = ({ view, setSearch }: SearchProps) => {

    const debounce = <T extends unknown[]>(fn: (...args: T) => void, delay: number) => {
        let timer: number;

        return (...args: T) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn(...args)
            }, delay)
        }
    }

    const debouncedSearch = useCallback(debounce(setSearch, 300), [])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        debouncedSearch(e.currentTarget.value)
    }
    return (
        <div className="app__search-header">
            {
                view === 'all' ? (
                    <h3>All Notes</h3>
                )
                    : (
                        <h3>Archived Notes</h3>
                    )}


            <div className="search__input-wrapper">
                <IconSearch className="search__icon" />
                <input className="search__input" type="text" placeholder="Search by title, content, or tags…" onChange={handleChange} />
            </div>

        </div>
    )
}