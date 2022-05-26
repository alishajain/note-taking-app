import { Route, Switch, Redirect } from 'react-router-dom';

import AllNotes from './pages/AllNotes';
import NoteDetail from './pages/NoteDetails';
import NewNote from './pages/NewNote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/notes' />
        </Route>
        <Route path='/notes' exact>
          <AllNotes />
        </Route>
        <Route path='/notes/:noteId'>
          <NoteDetail />
        </Route>
        <Route path='/new-note'>
          <NewNote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;