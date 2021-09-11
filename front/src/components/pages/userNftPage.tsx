import React from 'react';
import { UserDetails } from 'components/organisms/userDetails';
import { UserPageHeader } from 'components/organisms/userPageHeader';
import { UserInfoQuery, useSessionQuery } from 'generated/graphql';
import { userMatchesSession } from 'utils/session';


export interface UserNftPageProps {
  userInfo: NonNullable<UserInfoQuery['userByName']>;
  deposit: boolean;
}

export const UserNftPage: React.FC<UserNftPageProps> = ({ userInfo }) => {
  const { data } = useSessionQuery();

  return (
    <>
      <UserDetails userInfo={userInfo} />
      {userMatchesSession(data?.session, userInfo.username) && (
        <>
          <UserPageHeader />
        </>
      )}
    </>
  );
};
