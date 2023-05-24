const getUser = phone => {
  return fetch(`https://lynk-up-server.onrender.com/users/${phone}`)
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
    return fetch(`https://lynk-up-server.onrender.com/${user_id}/friends`)
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
    return fetch(`https://lynk-up-server.onrender.com/groups`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .catch(err => console.log(err));
  }

export { getUser, getFriends, getEvent, getGroups };

