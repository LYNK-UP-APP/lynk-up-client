const getUser = (id) => {
  return fetch(`https://lynk-up-server.onrender.com/users/${id}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .catch(err => console.log(err));
}

const getEvent = id => {
  return fetch(`https://lynk-up-server.onrender.com/events/${id}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .catch(err => console.log(err));
}

const getFriends = (user_id) => {
    return fetch(`https://lynk-up-server.onrender.com/users/${user_id}/friends`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .catch(err => console.log(err));
}

  const getGroups = () => {
    return fetch(`https://lynk-up-server.onrender.com/groups/`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .catch(err => console.log(err));
}

  const postGroups = (groupInfo) => {

    fetch("https://lynk-up-server.onrender.com/groups/create/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": groupInfo.name,
        "user": groupInfo.user,
        "friends": groupInfo.friends
      }),
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .catch(err => console.log(err));
}

const postEvent = (event) => {
  fetch('https://lynk-up-server.onrender.com/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "title": event.eventName,
        "date": event.date,
        "time": event.time,
        "address": event.address,
        "group": event.group,
        "description": event.eventDescription
      }),
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    }
  })
  .catch(err => console.log(err));
}


export { getUser, getFriends, getEvent, getGroups, postGroups, postEvent };