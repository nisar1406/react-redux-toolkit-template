import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import BlankPage from './Blank';
import { setPageTitle } from '../../app/store/headerSlice';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Dashboard' }));
  }, []);

  return <BlankPage />;
};

export default InternalPage;
