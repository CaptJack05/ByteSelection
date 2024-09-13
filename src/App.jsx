import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Unauthorized from './Unauthorized';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
