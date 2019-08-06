import React from "react";

const Bio = ({ userName, userDetails, invalidUser }) => {
  const { avatar_url, name, public_repos, blog, html_url } = userDetails;
  return (
    <>
      {!invalidUser && userName && (
        <div className="app-bioContainer">
          <img src={avatar_url} alt="avatar" className="bio-avatar" />
          <div className="bio-body">
            <div className="bio-body__name">{name}</div>
            <div className={!name ? "bio-body__name" : "bio-body__username"}>
              {userName} : {public_repos} Public Repositories
            </div>
            <div>
              <a
                href={blog}
                className="bio-body__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
              <a
                href={html_url}
                className="bio-body__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                See in GitHub
              </a>
            </div>
          </div>
        </div>
      )}
      {!invalidUser && userName && public_repos === 0 && (
        <div className="bio-warning">No public repo found for this user !!</div>
      )}
      {invalidUser && (
        <div className="bio-warning">Please enter a valid username!!</div>
      )}
    </>
  );
};

export default Bio;
