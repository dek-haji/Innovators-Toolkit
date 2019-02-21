const remoteURL = "http://localhost:5002";
export default {
  get(id) {
    return fetch(`${remoteURL}/idea/${id}`).then(e => e.json());
  },
  getAll() {
    let sessionId = sessionStorage.getItem("userId")
    let sessionNumber = Number(sessionId)
    return fetch(`${remoteURL}/idea?userId=${sessionNumber}`).then(e => e.json());
  },
  post(idea) {
    return fetch(`${remoteURL}/idea/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }).then(data => data.json());
  },

  updateIdea(id, idea) {
    return fetch(`http://localhost:5002/idea/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }).then(data => data.json());

  },

  changeComponent(id, idea) {
    return fetch(`http://localhost:5002/idea/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }).then(data => data.json());
  },


  getOkIdeas(sessionId) {
    return fetch(`${remoteURL}/idea?categoryId=1&userId=${sessionId}`).then(e => e.json());
  },
  getBetterIdeas(sessionId) {
    return fetch(`${remoteURL}/idea?categoryId=2&userId=${sessionId}`).then(e => e.json());
  },
  getBestIdeas(sessionId) {
    return fetch(`${remoteURL}/idea?categoryId=3&userId=${sessionId}`).then(e => e.json());
  }

}



