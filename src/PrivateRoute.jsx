import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ component: Component }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await axios.get('/api/check-access', {
          headers: {
            youtubeToken: 'your-youtube-oauth-token',
            githubToken: 'your-github-oauth-token',
          },
        });
        setAuthorized(response.data.isAuthorized);
      } catch (error) {
        setAuthorized(false);
      }
    };

    checkAccess();
  }, []);

  if (authorized === null) {
    return <div>Loading...</div>;
  }

  return authorized ? <Component /> : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
