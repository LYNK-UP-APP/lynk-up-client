import './App.css';
import CreateEvent from '../CreateEvent/CreateEvent';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventInfo from '../EventInfo/EventInfo';
import FriendsPage from '../FriendsPage/FriendsPage';
import GroupPage from '../GroupPage/GroupPage';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/dashboard" render={() => <Dashboard/>}/>
          <Route exact path="/groups" render={() => <GroupPage/>}/>
          <Route exact path="/friends" render={() => <FriendsPage/>}/>
          <Route exact path="/new-event" render={() => <CreateEvent/>}/>
          <Route exact path="/event/:id" render={({ match }) => {
            const id = match.params;
            // send a request for the event based on the ID
            // render EventInfo with info from fetch passed through
            <EventInfo />
          }}/>
          <Route path="/"><Redirect to="/dashboard"/></Route>
          <Route exact path="/404"><ErrorPage/></Route>
          <Route path="*"><Redirect to="/404"/></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
