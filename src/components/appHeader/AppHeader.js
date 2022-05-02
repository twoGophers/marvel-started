import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/marvel-started">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink exact style={({ isActive}) => ({color : isActive ? '#9F0013' : 'inherit', 'border' : 'none'})} to="/marvel-started">Characters</NavLink></li>
                    /
                    <li><NavLink activeStyle={{'color' : '#9f0013', 'background' : 'none', 'border' : 'none'}} to="/marvel-started/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;