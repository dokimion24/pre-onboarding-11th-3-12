import React from 'react';
import Header from '../../components/Header';
import IssueDetail from '../../components/IssueDetail';
import { useIssuesState } from '../../contexts/IssuesContext';

const Detail = () => {
  const state = useIssuesState();

  return (
    <>
      <Header />
      <IssueDetail issue={state.data} />
    </>
  );
};

export default Detail;
