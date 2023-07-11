import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
