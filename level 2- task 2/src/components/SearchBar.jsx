
import { Search } from "lucide-react";

function SearchBar({ username, setUsername, onSearch, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <Search size={20} />
        <input
          type="text"
          placeholder="Enter a GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="GitHub username"
        />
      </div>

      <button type="submit" disabled={loading || !username.trim()}>
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}

export default SearchBar;
