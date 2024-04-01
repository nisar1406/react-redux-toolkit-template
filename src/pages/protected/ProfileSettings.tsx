import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from '../../app/store/headerSlice';
import ProfileSettings from '../../features/settings/profilesettings';

const InternalPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Settings' }));
  }, []);

  return <ProfileSettings />;
};

export default InternalPage;
