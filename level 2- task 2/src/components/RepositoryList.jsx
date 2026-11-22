
import { useState } from "react";
import { Star, GitFork, ExternalLink, Search } from "lucide-react";

function RepositoryList({ repos }) {
  const [filter, setFilter] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(filter.toLowerCase()) ||
    (repo.description || "").toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="repositories-section">
      <div className="repository-heading">
        <div>
          <h2>Public Repositories</h2>
          <p>Explore projects and contributions.</p>
        </div>
        <span className="repo-count">{filteredRepos.length} repositories</span>
      </div>

      <div className="repo-search">
        <Search size={18} />
        <input
          type="text"
          placeholder="Filter repositories..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {filteredRepos.length === 0 ? (
        <p className="empty-repos">No matching repositories found.</p>
      ) : (
        <div className="repository-grid">
          {filteredRepos.map((repo) => (
            <article className="repository-card" key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="repo-name"
              >
                {repo.name} <ExternalLink size={15} />
              </a>

              <p>{repo.description || "No description provided."}</p>

              <div className="repo-meta">
                {repo.language && <span>{repo.language}</span>}
                <span><Star size={15} /> {repo.stargazers_count}</span>
                <span><GitFork size={15} /> {repo.forks_count}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default RepositoryList;
