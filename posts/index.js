import autonomy from './autonomy.md';
import jsdom from './jsdom.md';
import comfortable from './comfortable.md';
import perfection from './perfection.md';

const POSTS = {
  perfection: {
    md: perfection,
    title: 'Perfection',
    summary: 'The pursuit of a non-existent perfection.',
    date: 'Sept 2019',
  },
  comfortable: {
    md: comfortable,
    title: 'Is it a sin to be comfortable?',
    summary:
      'Some late night musing thoughts and criticism of my own life maxims.',
    date: 'Sept 2019',
  },
  autonomy: {
    md: autonomy,
    title: 'Three Autonomies',
    summary: 'Financial, Happiness, and Thought Autonomies',
    date: 'Sept 2019',
  },
  jsdom: {
    md: jsdom,
    title: 'Normal JavaScript',
    summary: 'Some really basic JavaScript...',
    date: 'July 2018',
  },
};

export default POSTS;
