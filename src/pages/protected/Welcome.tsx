import React from 'react';
import { Link } from 'react-router-dom';

import TemplatePointers from '../../features/user/components/TemplatePointers';

const InternalPage: React.FC = () => {
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
