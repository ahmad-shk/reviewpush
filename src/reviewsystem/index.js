import React from 'react';
import { useLocation } from 'react-router-dom';
import ChildReview from '../component';

function ReviewSystem() {
  const location = useLocation();
  const pathValue = location.pathname.split('/').pop();
  return (
    <div>
      <ChildReview dataNum={pathValue||1} />
    </div>
  );
}

export default ReviewSystem;
