import axios from "axios";

var config = {
  headers: {
    'Authorization': "bearer " + "f555d2548bf8d56b23dec011dc434b63917cff52"
  }
};

export default {
  // Gets all items
  getArticles: function() {
    axios.get(
      "https: //api.medium.com/v1/users/jsrice7391/publications",
      config
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    });
  },
  // Gets the Item with the given id
  getRepos: function(id) {
    return axios.get("https://api.github.com/users/jsrice7391/repos?sort=updated&directon=ascending");
  },
  // Deletes the Item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a Item to the database
  saveItem: function(ItemData) {
    return axios.post("/api/items", ItemData);
  }
};
