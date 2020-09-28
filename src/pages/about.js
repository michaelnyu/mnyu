import React from 'react';
import { P, A } from '~/src/shared/typography';
import { GRID_UNIT } from '~/src/shared/styles';
import ChickenImg from '~/assets/chicken.jpg';

const styles = {
  image: {
    width: '50%',
    margin: `0 0 ${GRID_UNIT}px ${GRID_UNIT * 2}px`,
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
};

const About = () => {
  return (
    <>
      <P>Hi, I'm Michael</P>
      <img css={styles.image} align="right" src={ChickenImg} />
      <P>
        I am a student, but have a distaste for classrooms and lectures. I am an
        engineer that tries to work on things that both interest me and help
        others. I am a person who enjoys weekend trips, grocery stores at night,
         and starting books destined to never be finished.
      </P>
      <P>
        I was at UCLA enjoying the sunshine that Los Angeles brings - it will always have
        a special place in my heart.  I currently work at <A href="https://figma.com">Figma</A>{' '}
        as a part of an amazing team that is building <A href="https://figma.com/c">Community</A>.
        But, throughout my short career, I have worked at{' '}
        <A href="https://affirm.com/">Affirm</A>,{' '}<A href="https://convoy.com/">Convoy</A>, and{' '}
        <A href="https://techcrunch.com/2018/06/19/yahoo-mail-go/">Yahoo</A>{' '}.
      </P>
      <P>
        The latest thing I created is a <A href="https://sevenonefour.mnyu.cc">game</A> for my college apartment mates.  Please feel free to
        check it out as well!  Lastly, if you made it this far and feel inclined, my DMs on twitter are always open.  I'd love to know
        what you thought about the game I made!
      </P>
      <P>
        Please don't be a stranger!
        <br />
        <A href="https://twitter.com/michaelnyu1">Twitter</A> (tangentially
        related to tech)
        {/* <br />
        <A href="https://www.instagram.com/michaelyyou/">Instagram</A>{' '}
        (unmoderated & unfiltered view into my life) */}
      </P>
    </>
  );
};

export default About;
