const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json());
  },
  getUserSpecific(sessionId){
    return fetch(`${remoteURL}/users/${sessionId}`).then(e => e.json());
  
},
getSpecificUser(sessionId){
  return fetch(`${remoteURL}/users?userId=${sessionId}`).then(e => e.json());
}
}