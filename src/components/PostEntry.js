import React from 'react';
import Link from '~/src/components/link';
import { Heading, FONT_COLORS } from '~/src/shared/typography';
import { GRID_UNIT } from '~/src/shared/styles';

const styles = {
  entry: {
    marginBottom: GRID_UNIT * 8,
    border: '0px solid black',
    borderRadius: GRID_UNIT * 2,
    overflow: 'hidden',
    transform: `translate(-${GRID_UNIT * 2}px)`,
  },
  background: {
    '&:focus, &:hover': {
      backgroundColor: '#FFF7B6',
    },
    padding: GRID_UNIT * 2,
  },
  date: {
    opacity: 0.4,
  },
};

const PostEntry = ({ title, summary, date, ...otherProps }) => (
  <Link {...otherProps}>
    <div css={styles.entry}>
      <div css={styles.background}>
        <Heading color={FONT_COLORS.BLACK}>{title}</Heading>
        <Heading color={FONT_COLORS.GRAY}>
          {summary} <span css={styles.date}>{date}</span>
        </Heading>
      </div>
    </div>
  </Link>
);

export default PostEntry;
