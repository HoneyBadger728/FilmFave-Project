import '../css/Favorites.css'; // Import the CSS file for styling

function Favorite() {
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites by clicking the ♥ icon . . .</p>
        </div>
    )
}

export default Favorite;