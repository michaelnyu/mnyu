import React from 'react';
import Link from '~/src/components/link';
import { Heading, FONT_COLORS } from '~/src/shared/typography';
import { GRID_UNIT } from '~/src/shared/styles';

const styles = {
  entry: {
    marginBottom: GRID_UNIT * 8,
  },
  date: {
    opacity: 0.4,
  },
};

const PostEntry = ({ title, summary, date, ...otherProps }) => (
  <Link {...otherProps}>
    <div css={styles.entry}>
      <Heading color={FONT_COLORS.BLACK}>{title}</Heading>
      <Heading color={FONT_COLORS.GRAY}>
        {summary} <span css={styles.date}>{date}</span>
      </Heading>
    </div>
  </Link>
);

export default PostEntry;
