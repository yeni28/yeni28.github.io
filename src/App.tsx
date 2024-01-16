import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Profile from './pages/profile/Profile';
import Project from './pages/project/Project';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/project" Component={Project} />
    </Routes>
  );
};

export default App;
