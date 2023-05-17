import './App.css';
import CreateEvent from '../CreateEvent/CreateEvent';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventInfo from '../EventInfo/EventInfo';
import FriendsPage from '../FriendsPage/FriendsPage';
import GroupPage from '../GroupPage/GroupPage';
import Header from '../Header/Header';
import { Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>YUH</h1>
      <Header></Header>

      {/* <CreateEvent></CreateEvent> */}
      <Route exact path="/" render={() => <Dashboard />} />
      <Route exact path="/groups" render={() => <GroupPage />} />
      {/* <ErrorPage></ErrorPage>
      <EventInfo></EventInfo>
      <FriendsPage></FriendsPage>
      <GroupPage></GroupPage> */}
    </div>
  );
}

export default App;
