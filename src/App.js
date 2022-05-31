import { Route, Switch, Redirect } from 'react-router-dom';

import AllNotes from './pages/AllNotes';
import NoteDetail from './pages/NoteDetails';
import NewNote from './pages/NewNote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import ArchieveNote from './pages/ArchieveNote';
import AllTrashNotes from './pages/AllTrashNotes';
import Label from './pages/Label';

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
        <Route path='/archieve'>
          <ArchieveNote />
        </Route>
        <Route path='/trash'>
          <AllTrashNotes />
        </Route>
        <Route path='/label' >
          <Label />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;