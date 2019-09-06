import React from 'react';
import PostEntry from '~/src/components/PostEntry';
import POSTS from '~/posts';

const Home = () => {
  return (
    <>
      {Object.entries(POSTS).map(postEntry => {
        const [key, metadata] = postEntry;
        return (
          <PostEntry
            key={key}
            title={metadata.title}
            summary={metadata.summary}
            date={metadata.date}
            to={`/posts/${key}`}
          />
        );
      })}
    </>
  );
};

export default Home;
