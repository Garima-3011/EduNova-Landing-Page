
const BASE_URL = "https://api.github.com";

// Fetch GitHub user profile
export async function fetchGitHubUser(username) {
  const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(username)}`);

  if (response.status === 404) {
    throw new Error("GitHub user not found. Check the username.");
  }

  if (response.status === 403) {
    throw new Error("GitHub API rate limit reached. Please try again later.");
  }

  if (!response.ok) {
    throw new Error("Unable to fetch user profile. Please try again.");
  }

  return response.json();
}

// Fetch user's public repositories
export async function fetchGitHubRepos(username) {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`
  );

  if (response.status === 403) {
    throw new Error("GitHub API rate limit reached. Please try again later.");
  }

  if (!response.ok) {
    throw new Error("Unable to fetch repositories.");
  }

  return response.json();
}
