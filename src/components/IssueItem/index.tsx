/** @jsxImportSource @emotion/react */
import React from 'react';
import Txt from '../Txt';
import { useNavigate } from 'react-router-dom';
import { useIssuesDispatch } from '../../contexts/IssuesContext';

const IssueItem = ({ issue }: any) => {
  const navigate = useNavigate();
  const dispatch = useIssuesDispatch();
  const { created_at, comments, title, user, number, id } = issue;

  const handleClick = () => {
    dispatch({ type: 'GET_ISSUE_DETAIL', payload: id });
    navigate(`/detail/${id}`);
  };

  return (
    <li
      onClick={handleClick}
      css={{
        display: 'flex',
        borderBottom: '1px solid #ccc',
        padding: '12px 0px',
        cursor: 'pointer',
      }}
    >
      <div css={{ width: '400px' }}>
        <div css={{ display: 'flex' }}>
          <Txt typography="h4">#{number}&nbsp;</Txt>
          <Txt
            typography="h4"
            css={{
              width: '280px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Txt>
        </div>
        <div>
          <Txt>작성자:{user.login}&nbsp;</Txt>
          <Txt>작성일:{created_at}</Txt>
        </div>
      </div>
      <Txt>코멘트:{comments}</Txt>
    </li>
  );
};

export default IssueItem;

//이슈번호,  작성자,
