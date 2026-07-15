function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="search">
      {/* Accessible label (hidden visually) */}
      <label htmlFor="city-search" className="sr-only">
        Search City
      </label>

      <input
        id="city-search"
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="Enter city name"
      />

      <button
        onClick={getWeather}
        aria-label="Search Weather"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;