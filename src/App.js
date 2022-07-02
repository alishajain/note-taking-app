import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AllNotes from "./pages/AllNotes";
import NoteDetail from "./pages/NoteDetails";
import NewNote from "./pages/NewNote";
import Layout from "./components/layout/Layout";
import ArchieveNote from "./pages/ArchieveNote";
import AllTrashNotes from "./pages/AllTrashNotes";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/notes" exact>
          {authCtx.isLoggedIn && <AllNotes />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/notes/:noteId">
          {authCtx.isLoggedIn && <NoteDetail />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/new-note">
          {authCtx.isLoggedIn && <NewNote />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/archieve">
          {authCtx.isLoggedIn && <ArchieveNote />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/trash">
          {authCtx.isLoggedIn && <AllTrashNotes />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
