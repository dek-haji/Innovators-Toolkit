const remoteURL = "http://localhost:5002";
export default {
    get(id) {
      return fetch(`${remoteURL}/idea/${id}`).then(e => e.json());
    },
    getAll() {
      return fetch(`${remoteURL}/idea`).then(e => e.json());
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
    
    updateIdea (id, idea) {
      return fetch(`http://localhost:5002/idea/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(idea)
        }).then(data => data.json());
          
        },
        
        changeComponent (id, idea) {
          return fetch(`http://localhost:5002/idea/${id}`, {
              method: "PATCH",
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
      
      

    