/** @jsxImportSource @emotion/react */

import React from 'react';
import IssueItem from '../IssueItem';

interface Issue {
  id: string;
  title: string;
  comments: string;
  created_at: string;
}

interface Props {
  issues: Issue[];
}

const IssueList = ({ issues }: Props) => {
  return (
    <ul css={{ height: '100%' }}>
      {issues?.map(issue => <IssueItem key={issue.id} issue={issue} />)}
    </ul>
  );
};

export default IssueList;
