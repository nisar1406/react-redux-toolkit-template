import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '../../app/store/headerSlice';
import Team from '../../features/settings/team';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Team Members' }));
  }, []);

  return <Team />;
};

export default InternalPage;
