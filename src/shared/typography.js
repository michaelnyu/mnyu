import React from 'react';

// dict of supported colors
export const FONT_COLORS = {
  BLACK: 'BLACK',
  GRAY: 'GRAY',
}

export const COLOR_DATA = {
  BLACK: '#010101',
  GRAY_OPACITY: 0.4,
  FULL_OPACITY: 1.0,
};

export const BASE_FONT_FAMILY = "'PT Serif', serif";

export const FONT_WEIGHT = {
  REGULAR: 400,
};

/*
  HEADING
*/

const heading = ({ color }) => {
  const opacity =
    color === FONT_COLORS.GRAY ? COLOR_DATA.GRAY_OPACITY : COLOR_DATA.FULL_OPACITY;
  return {
    fontSize: 18,
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: FONT_WEIGHT.REGULAR,
    opacity,
    color: COLOR_DATA.BLACK,
    margin: 0,
    padding: 0,
  };
};

export const Heading = ({ children, color }) => (
  <h1 css={heading({ color })}>{children}</h1>
);
