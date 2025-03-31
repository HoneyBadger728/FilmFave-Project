import '../css/Favorites.css'; // Import the CSS file for styling
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard'; // Import the MovieCard component

function Favorite() {
    const { favorites } = useMovieContext(); // Get the favorites from the context

    if (favorites && favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                </div>
            </div>
        )
    } else {

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites by clicking the ♥ icon . . .</p>
        </div>
    )}
}

export default Favorite;