import React, { useEffect, useState, useRef } from 'react';
import IssueList from '../../components/IssueList';
import {
  useIssuesDispatch,
  useIssuesState,
} from '../../contexts/IssuesContext';
import { getIssues } from '../../service/issue';
import Header from '../../components/Header';

const Home = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const [page, setPage] = useState(0);

  console.log(state);
  //@ts-ignore
  const { data: issues, loading, error } = state;

  const obsRef = useRef(null);

  console.log(obsRef);
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const endRef = useRef(false); //모든 글 로드 확인

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(page);

  //@ts-ignore
  const obsHandler = entries => {
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      //옵저버 중복 실행 방지
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    getIssues(dispatch, page);
  }, [page, dispatch]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <Header />
      <IssueList issues={issues} />
      <div ref={obsRef} style={{ height: '10px' }} />
    </>
  );
};

export default Home;
