/** @jsxImportSource @emotion/react */

import React from 'react';
import Txt from '../Txt';

const IssueDetail = ({ issue }: any) => {
  console.log({ issue });
  const { created_at, comments, title, user, number, body } = issue[0];
  return (
    <div css={{ height: '100vh', overflow: 'scroll' }}>
      <div css={{ display: 'flex', marginBottom: '32px' }}>
        <div>
          <img
            src={user.avatar_url}
            css={{ width: '40px', height: '40px' }}
            alt="avatar"
          />
        </div>
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
            <Txt>작성자:{user?.login}&nbsp;</Txt>
            <Txt>작성일:{created_at}</Txt>
          </div>
        </div>
        <Txt>코멘트:{comments}</Txt>
      </div>
      <div>
        <Txt css={{ width: '100%' }}>{body}</Txt>
      </div>
    </div>
  );
};

export default IssueDetail;
