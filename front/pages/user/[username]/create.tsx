import React from 'react';
import { DefaultLayout } from 'components/layouts/defaultLayout';

import { NextPage } from 'next';
import { UserDetails } from 'components/organisms/userDetails';
import { UserPageHeader } from 'components/organisms/userPageHeader';
import { CreateNftDashboard } from 'components/organisms/createNftDashboard';
import { useCheckAccessToUserPage } from 'utils/session';
import { PageSpinner } from 'components/atoms/spinner';

const SettingsPage: NextPage = () => {
  const { data, loading } = useCheckAccessToUserPage();

  if (loading || !data?.session) {
    return <PageSpinner />;
  }

  return (
    <DefaultLayout>
      <UserDetails userInfo={data.session} />
      <UserPageHeader />
      <CreateNftDashboard userInfo={data.session} />
    </DefaultLayout>
  );
};

export default SettingsPage;
