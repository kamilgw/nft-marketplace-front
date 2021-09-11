import React from 'react';
import { WalletDashboard } from 'components/pages/walletDashboard';
import { NextPage } from 'next';
import { useCheckAccessToUserPage } from 'utils/session';
import { PageSpinner } from 'components/atoms/spinner';

const CkbPage: NextPage = () => {
  const { data, loading } = useCheckAccessToUserPage();

  if (loading || !data?.session) {
    return <PageSpinner />;
  }

  return <WalletDashboard session={data.session} />;
};

export default CkbPage;
