import '../styles/BottomNav.css'
import { IconHomeOutline, IconSearch, IconArchive, IconTagOutline, IconSettings } from './icons'

export const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <button className="bottom-nav__item bottom-nav__item--active">
                <IconHomeOutline className="bottom-nav__icon" />
                <span>Home</span>
            </button>
            <button className="bottom-nav__item">
                <IconSearch className="bottom-nav__icon" />
                <span>Search</span>
            </button>
            <button className="bottom-nav__item">
                <IconArchive className="bottom-nav__icon" />
                <span>Archived</span>
            </button>
            <button className="bottom-nav__item">
                <IconTagOutline className="bottom-nav__icon" />
                <span>Tags</span>
            </button>
            <button className="bottom-nav__item">
                <IconSettings className="bottom-nav__icon" />
                <span>Settings</span>
            </button>
        </nav>
    )
}
