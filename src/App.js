import React, { useState } from 'react';
import ReviewSystem from './reviewsystem';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/*" element={<ReviewSystem />} />
      </Routes>
      </Router>
  );
}

export default App;
