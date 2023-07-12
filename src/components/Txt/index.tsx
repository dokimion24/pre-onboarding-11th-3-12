/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: 'p' | 'h4' | 'h2';
}

const Txt = ({ typography = 'p', ...props }: Props) => {
  return (
    <span
      css={{
        display: 'inline-block',
        lineHeight: 1.4,

        ...TYPOGRAPH_VARIANT[typography],
      }}
      {...props}
    />
  );
};

const TYPOGRAPH_VARIANT = {
  h2: {
    fontSize: '22px',
  },
  h4: {
    fontSize: '18px',
  },
  p: {
    fontSize: '14px',
  },
};

export default Txt;
