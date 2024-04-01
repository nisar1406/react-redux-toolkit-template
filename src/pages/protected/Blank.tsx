import DocumentIcon from '@heroicons/react/24/solid/DocumentIcon';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '../../app/store/headerSlice';
import useApiRequest from '../../hooks/useApiRequest';
import { useAuth } from '../../hooks/useAuth';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchData: pageLoadFetch, response: pageLoadData } = useApiRequest();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Blank Page' }));
  }, []);

  useEffect(() => {
    pageLoadFetch('GET', '/todos/1');
  }, []);

  console.log(pageLoadData, user);

  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <DocumentIcon className="h-48 w-48 inline-block" />
          <h1 className="text-5xl mt-2 font-bold">Blank Page</h1>
        </div>
      </div>
    </div>
  );
};

export default InternalPage;
