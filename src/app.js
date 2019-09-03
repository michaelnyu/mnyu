import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '~/src/pages/navbar';
import HomePage from '~/src/pages/home';
import { VIEW_WIDTH, CONTENT_WIDTH, GRID_UNIT } from '~/src/shared/styles';
const AboutPage = React.lazy(() => import('pages/home'));

const styles = {
  app: {
    width: VIEW_WIDTH,
    margin: 'auto',
    marginTop: GRID_UNIT * 12,
  },
};

const App = () => (
  <div css={styles.app}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
