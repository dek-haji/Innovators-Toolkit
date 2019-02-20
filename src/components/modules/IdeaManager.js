const remoteURL = "http://localhost:5002";
export default {
  get(id) {
    return fetch(`${remoteURL}/idea/${id}`).then(e => e.json());
  },
  getAll() {
    let sessionId = sessionStorage.getItem("userId")
    return fetch(`${remoteURL}/idea?userId=${sessionId}`).then(e => e.json());
  },
  post(idea) {
    let sessionId = sessionStorage.getItem("userId")  //sorting the userId
    return fetch(`${remoteURL}/idea?userId=${sessionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)  //The JSON.stringify() method converts a JavaScript object or value to a JSON string
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
      method: "PATCH",  // i used  PATCH, to modify an existing HTTP resource. instead of PUT
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(idea)
    }).then(data => data.json());
  },


  getOkIdeas() {
    return fetch(`${remoteURL}/idea?categoryId=1`).then(e => e.json());
  },
  getBetterIdeas() {
    return fetch(`${remoteURL}/idea?categoryId=2`).then(e => e.json());
  },
  getBestIdeas() {
    return fetch(`${remoteURL}/idea?categoryId=3`).then(e => e.json());
  }

}



