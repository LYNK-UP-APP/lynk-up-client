const getUser = phone => {
  return fetch(`https://bab2f687-e74e-434e-933e-7c7884a0521d.mock.pstmn.io/api/v1/users/${phone}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

export { getUser };