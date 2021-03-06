import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GRID_UNIT, VIEW_STYLES } from '~/src/shared/styles';
import { headingStyles, pStyles, FONT_WEIGHT } from '~/src/shared/typography';

const styles = {
  body: {
    '> h1': headingStyles({
      marginBottom: GRID_UNIT * 8,
      fontWeight: FONT_WEIGHT.BOLD,
    }),
    '> p': pStyles({
      '> img': {
        ...VIEW_STYLES,
      },
    }),
    '> pre': {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      '> code': {
        backgroundColor: '#E8E8E8',
        borderRadius: 2,
        padding: '0 4px 0 4px',
        fontSize: 16,
      },
    },
  },
};

const PagePost = ({ title, summary, ...otherProps }) => (
  <div css={styles.body}>
    <ReactMarkdown css={styles.body} {...otherProps} />
  </div>
);

export default PagePost;
