import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPageTitle } from '../../app/store/headerSlice';
import TemplatePointers from '../../features/user/components/TemplatePointers';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: '' }));
  }, []);

  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <TemplatePointers />
          <Link to="/dashboard">
            <button className="btn bg-base-100 btn-outline">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternalPage;
