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
        others. I am a person who enjoys weekend trips, wrestling to get on top
        of small rocks, and starting books that I will never finish.
      </P>
      <P>
        I’m currently at UCLA enjoying the sunshine that the city brings.
        Throughout my short career, I have worked at{' '}
        <A href="https://tech.affirm.com/">Affirm</A> (a company that offers
        loans for consumer products - helping us avoid credit card debt and late
        fees), <A href="https://convoy.com/"> Convoy</A> (a digital freight
        brokerage that is reducing waste), and{' '}
        <A href="https://techcrunch.com/2018/06/19/yahoo-mail-go/">Yahoo</A>{' '}
        (working on Mail for mobile web). Some of my spare time is consumed by
        reading about web performance and other client side goodies - chat with
        me if you’re interested too.
      </P>
      <P>
        Don't be a stranger!
        <br />
        <A href="https://twitter.com/michaelnyu1">Twitter</A> (tangentially
        related to tech)
        <br />
        <A href="https://www.instagram.com/michaelyyou/">Instagram</A>{' '}
        (unmoderated & unfiltered view into my life)
      </P>
    </>
  );
};

export default About;
