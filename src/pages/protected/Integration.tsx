import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '../../app/store/headerSlice';
import Integration from '../../features/integration';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Integrations' }));
  }, []);

  return <Integration />;
};

export default InternalPage;
