import './App.css';
import CreateEvent from '../CreateEvent/CreateEvent';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import EventInfo from '../EventInfo/EventInfo';
import FriendsPage from '../FriendsPage/FriendsPage';
import GroupPage from '../GroupPage/GroupPage';
import Header from '../Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, updateEvents } from '../../app/rootSlice';
import { useEffect } from 'react';
import { getUser } from '../../ApiCalls';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(1)
    .then(data => {
      dispatch(updateUser(data.data.attributes));
      dispatch(updateEvents(data.data.events));
    })
    .catch(err => console.log(`There has been an error: ${err}`))
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/dashboard" render={() => <Dashboard/>}/>
          <Route exact path="/groups" render={() => <GroupPage/>}/>
          <Route exact path="/friends" render={() => <FriendsPage/>}/>
          <Route exact path="/new-event" render={() => <CreateEvent/>}/>
          <Route exact path="/events/:id" render={({ match }) => {
            const { id } = match.params;
            return <EventInfo id={id}/>
          }}/>
          <Route exact path="/"><Redirect to="/dashboard"/></Route>
          <Route exact path="/404"><ErrorPage/></Route>
          <Route path="*"><Redirect to="/404"/></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
