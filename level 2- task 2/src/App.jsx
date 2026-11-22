
import { useEffect, useState } from "react";
import { Search, Code2 } from "lucide-react";

import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import RepositoryList from "./components/RepositoryList";

import {
  fetchGitHubUser,
  fetchGitHubRepos,
} from "./services/github";

function App() {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      setSearchTerm(username.trim());
    }
  };

  useEffect(() => {
    if (!searchTerm) return;

    let cancelled = false;

    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");
      setUser(null);
      setRepos([]);

      try {
        const [userData, repoData] = await Promise.all([
          fetchGitHubUser(searchTerm),
          fetchGitHubRepos(searchTerm),
        ]);

        if (!cancelled) {
          setUser(userData);
          setRepos(repoData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <div className="app">
      <header className="topbar">
        <a href="/" className="brand">
          <Code2 size={29} />
          <span>GitHub Explorer</span>
        </a>
        <span className="topbar-label">DEVELOPER DISCOVERY</span>
      </header>

      <main>
        <section className="hero">
          <span className="hero-tag">
            <Code2 size={15} /> EXPLORE THE DEVELOPER COMMUNITY
          </span>

          <h1>
            Discover developers.
            <br />
            <span>Explore their work.</span>
          </h1>

          <p>
            Search any GitHub username to discover their profile,
            projects, and open-source contributions.
          </p>

          <SearchBar
            username={username}
            setUsername={setUsername}
            onSearch={handleSearch}
            loading={loading}
          />

          <div className="api-note">
            <Search size={14} /> Powered by the GitHub REST API
          </div>
        </section>

        <section className="results-section">
          {loading && (
            <div className="status-message">
              <div className="loader"></div>
              <p>Searching GitHub...</p>
            </div>
          )}

          {error && !loading && (
            <div className="error-message">
              <strong>Something went wrong</strong>
              <p>{error}</p>
            </div>
          )}

          {user && !loading && (
            <>
              <ProfileCard user={user} />
              <RepositoryList repos={repos} />
            </>
          )}

          {!user && !loading && !error && (
            <div className="empty-state">
              <div className="empty-icon">
                <Code2 size={42} />
              </div>
              <h2>Start exploring GitHub</h2>
              <p>
                Enter a GitHub username above to view the developer's
                profile and public repositories.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>GitHub Explorer · Built with React and GitHub API</p>
      </footer>
    </div>
  );
}

export default App;
