import React from 'react';

const Unauthorized = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>
        You need to be subscribed to B.Y.T.E.'s YouTube channel or follow the GitHub account to access this page.
      </p>
      <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer">
        Subscribe on YouTube
      </a>
      <br />
      <a href="https://github.com/your-github-account" target="_blank" rel="noopener noreferrer">
        Follow on GitHub
      </a>
    </div>
  );
};

export default Unauthorized;
