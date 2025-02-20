import React from 'react';

import ProfileIcon from '../../../components/ProfileIcon';
import UserInfo from './UserInfo';
import { UserPageInfoWrapper, ProfileIconWrapper } from './styles';

const UserPageInfo = ({ username }) => {
  return (
    <UserPageInfoWrapper>
      <ProfileIconWrapper>
        <ProfileIcon ratio={46.875} />
      </ProfileIconWrapper>
      <UserInfo username={username} />
    </UserPageInfoWrapper>
  );
};

export default UserPageInfo;
