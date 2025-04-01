import { Link } from 'react-router-dom';
import '../css/NavBar.css'; // Import the CSS file for styling

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">FilmFave</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;