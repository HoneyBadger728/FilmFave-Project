import '../css/MovieCard.css'; // Import the CSS file for styling

function MovieCard({movie}) {
    
    function onFavoriteClick() {
        alert("clicked");
    }
    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title || "Movie Poster"} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
               <h3>{movie.title}</h3>
               <p>{movie.release_date}</p> 
            </div>
        </div>
    )
}

export default MovieCard;
// This code defines a React functional component called MovieCard.