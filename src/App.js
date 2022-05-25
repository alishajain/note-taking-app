import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import AllNotes from "./pages/AllNotes";

const NewNote = React.lazy(() => import("./pages/NewNote"));
const NoteDetail = React.lazy(() => import("./pages/NoteDatils"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/notes" />
          </Route>
          <Route path="/notes" exact>
            <AllNotes />
          </Route>
          <Route path="/notes/:noteId">
            <NoteDetail />
          </Route>
          <Route path="new-note">
            <NewNote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;