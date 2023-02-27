import React from 'react';
import '../ProfileCard/styles.scss';
import { createBreakpoint } from 'react-use';
import MobileView from './mobileView';
import RegularView from './regularView';

const useBreakpoint = createBreakpoint({
  xl: 2000,
  lg: 1200,
  md: 900,
  sm: 600,
  xs: 0
});

const Profile = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'sm' || breakpoint === 'xs';
  if (isMobile) {
    return <MobileView />;
  }

  return <RegularView breakpoint={breakpoint}/>;
};

export default Profile;
