import { css } from 'emotion';

export const buildStyles = (stylesObject = {}) => {
  return Object.entries(stylesObject).reduce((accumulator, entry) => {
    const [styleName, styleObject] = entry;
    return {
      ...accumulator,
      [styleName]: css(styleObject).styles,
    };
  }, {});
};
