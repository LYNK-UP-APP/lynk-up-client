import './App.css';
import CreateEvent from '../CreateEvent/CreateEvent';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventInfo from '../EventInfo/EventInfo';
import FriendsPage from '../FriendsPage/FriendsPage';
import GroupPage from '../GroupPage/GroupPage';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <CreateEvent></CreateEvent> */}
        <Route exact path="/dashboard" render={Dashboard} />
        {/* <EventInfo></EventInfo> */}
        <Route exact path="/friends" render={FriendsPage} />
        <Route exact path="/groups" render={GroupPage} />
        {/* <ErrorPage></ErrorPage> */}
      </main>
    </>
  );
}

export default App;
