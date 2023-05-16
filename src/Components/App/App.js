import './App.css';
import CreateEvent from '../CreateEvent/CreateEvent';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventInfo from '../EventInfo/EventInfo';
import FriendsPage from '../FriendsPage/FriendsPage';
import GroupPage from '../GroupPage/GroupPage';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <CreateEvent></CreateEvent>
        <Dashboard></Dashboard>
        <ErrorPage></ErrorPage>
        <EventInfo></EventInfo>
        <FriendsPage></FriendsPage>
        <GroupPage></GroupPage>
      </main>
    </>
  );
}

export default App;
