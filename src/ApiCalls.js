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
  return fetch(`https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/events/${id}`)
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
    return fetch(`https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/users/${user_id}/friends`)
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
    return fetch(`https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/groups`)
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

