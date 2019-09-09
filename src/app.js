import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '~/src/pages/navbar';
import HomePage from '~/src/pages/home';
import { VIEW_STYLES, GRID_UNIT } from '~/src/shared/styles';
import { GenericSuspenceLoad } from '~/src/utils/react';
import POSTS from '~/posts';

const AboutPage = React.lazy(() => import('pages/about'));
const PostPage = React.lazy(() => import('~/src/components/PostPage'));

const styles = {
  app: {
    ...VIEW_STYLES,
    marginTop: GRID_UNIT * 12,
    marginBottom: GRID_UNIT * 15,
  },
  content: {
    marginTop: GRID_UNIT * 12,
  },
};

const App = () => (
  <div css={styles.app}>
    <NavBar />
    <div css={styles.content}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={GenericSuspenceLoad(AboutPage)} />
        {Object.entries(POSTS).map(postEntry => {
          const [key, metadata] = postEntry;
          return (
            <Route
              key={key}
              path={`/posts/${key}`}
              component={() =>
                GenericSuspenceLoad(PostPage)({
                  source: metadata.md,
                })
              }
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
