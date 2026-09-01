import React, { useState, useEffect } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/repo/user/${userId}`,
        );
        const data = await response.json();
        setRepositories(data.repositories);
      } catch (err) {
        console.error("Error while fetching repositories", err);
      }
    };

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch("http://localhost:3000/repo/all");
        const data = await response.json();
        // console.log(data);
        setSuggestedRepositories(data.repositories);
      } catch (err) {
        console.error("Error while fetching repositories", err);
      }
    };

    // fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  useEffect(() => {
    if (searchQuery == "") {
      setSearchResult(repositories);
    } else {
      const filteredRepo = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResult(filteredRepo);
    }
  }, [searchQuery, repositories]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-lg-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Suggested Repositories</h5>
            </div>

            <div className="card-body">
              {suggestedRepositories.map((repo) => (
                <div className="repo-item mb-3" key={repo._id}>
                  <h6>{repo.name}</h6>
                  <p className="text-muted small mb-0">{repo.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="col-lg-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0">Your Repositories</h3>

                <input
                  className="form-control search-box"
                  type="search"
                  placeholder="Find a repository..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {searchResult.length === 0 ? (
                <p className="text-muted">No repositories found.</p>
              ) : (
                searchResult.map((repo) => (
                  <div className="repo-card" key={repo._id}>
                    <div className="d-flex justify-content-between">
                      <h5 className="repo-name">{repo.name}</h5>

                      <span className="badge bg-light text-dark border">
                        Public
                      </span>
                    </div>

                    <p className="text-muted mt-2">{repo.description}</p>

                    <hr />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}

        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Upcoming Events</h5>
            </div>

            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tech Conference Dev 15</li>

                <li className="list-group-item">Developer Meetup</li>

                <li className="list-group-item">React Summit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
