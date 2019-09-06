import React from 'react';
import { GRID_UNIT } from '~/src/shared/styles';

// dict of supported colors
export const FONT_COLORS = {
  BLACK: 'BLACK',
  GRAY: 'GRAY',
};

export const COLOR_DATA = {
  BLACK: '#1A1A1A',
  GRAY_OPACITY: 0.4,
  FULL_OPACITY: 1.0,
};

export const BASE_FONT_FAMILY = "'PT Serif', serif";

const BASE_FONT = {
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
};

export const FONT_WEIGHT = {
  REGULAR: 400,
  BOLD: 700,
};

/*
  HEADING
*/

export const headingStyles = ({ color, ...overrideStyles } = {}) => {
  const opacity =
    color === FONT_COLORS.GRAY
      ? COLOR_DATA.GRAY_OPACITY
      : COLOR_DATA.FULL_OPACITY;
  return {
    fontSize: 18,
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: FONT_WEIGHT.REGULAR,
    opacity,
    color: COLOR_DATA.BLACK,
    margin: 0,
    padding: 0,
    ...BASE_FONT,
    ...overrideStyles,
  };
};

export const Heading = ({ children, color }) => (
  <h1 css={headingStyles({ color })}>{children}</h1>
);

/*
  Paragraph
*/

export const pStyles = ({ color, ...overrideStyles } = {}) => {
  const opacity =
    color === FONT_COLORS.GRAY
      ? COLOR_DATA.GRAY_OPACITY
      : COLOR_DATA.FULL_OPACITY;
  return {
    fontSize: 18,
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: FONT_WEIGHT.REGULAR,
    opacity,
    color: COLOR_DATA.BLACK,
    margin: 0,
    padding: 0,
    lineHeight: 1.3,
    ...BASE_FONT,
    ...overrideStyles,
  };
};

export const P = ({ children, color }) => (
  <p css={pStyles({ color })}>{children}</p>
);
