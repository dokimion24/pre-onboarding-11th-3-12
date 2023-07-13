/** @jsxImportSource @emotion/react */

import React, { useEffect, useState, useRef } from 'react';
import {
  useIssuesDispatch,
  useIssuesState,
} from '../../contexts/IssuesContext';
import { getIssues } from '../../service/issue';
import Header from '../../components/Header';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import IssueItem from '../../components/IssueItem';

const Home = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const [page, setPage] = useState(0);

  const { data: issues, loading, error } = state;

  console.log(state);

  const target = useRef(null);
  console.log(target);
  const { observe, unobserve } = useInfinityScroll(() => {
    setPage(prev => prev + 1);
  });

  console.log(page);

  useEffect(() => {
    getIssues(dispatch, page);
  }, [page, dispatch]);

  useEffect(() => {
    if (page < 100) observe(target.current);
    if (page > 100) unobserve(target.current);
  }, [issues, page]);

  //@ts-ignore

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <Header />
      <div css={{ height: '100vh', overflow: 'scroll' }}>
        <ul>
          {issues?.map((issue: any, i: number) => (
            <IssueItem key={i} issue={issue} />
          ))}
        </ul>
        <div
          ref={target}
          css={{ backgroundColor: 'red', width: '100%', height: '100px' }}
        />
      </div>
    </>
  );
};

export default Home;
