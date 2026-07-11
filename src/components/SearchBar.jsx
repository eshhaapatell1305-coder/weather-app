function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="search">

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>

    </div>
  );
}

export default SearchBar;