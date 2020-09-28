import autonomy from './autonomy.md';
import jsdom from './jsdom.md';
import comfortable from './comfortable.md';
import perfection from './perfection.md';
import lost from './lost.md'
import sevenonefour from './sevenonefour.md'

const POSTS = {
  lost: {
    md: lost,
    title: 'Lost in Thought',
    summary: 'Musings about the sublime state',
    date: 'Sept 2020',
  },
  sevenonefour: {
    md: sevenonefour,
    title: 'A Game For & About My Apartment Mates',
    summary: 'A beautiful friendship',
    date: 'June 2020',
  },
  perfection: {
    md: perfection,
    title: 'Perfection',
    summary: 'The pursuit of a non-existent perfection',
    date: 'Sept 2019',
  },
  comfortable: {
    md: comfortable,
    title: 'Is it a sin to be comfortable?',
    summary:
      'Some late night musing thoughts and criticism of my own life maxims',
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
    summary: 'Some basic JavaScript',
    date: 'July 2018',
  },
};

export default POSTS;
