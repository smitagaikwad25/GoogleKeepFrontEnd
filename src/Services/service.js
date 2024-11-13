import axios from "axios";

let token = localStorage.getItem("token")

let headerConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export let signInAPI = (userData) => {
  let res = axios.post("http://localhost:4000/api/v1/users/login", userData);
  return res;
};

export let createNote = (noteDetails)=>{
  let res = axios.post("http://localhost:4000/api/v1/notes", noteDetails, headerConfig);
  return res;
}

export let getAllData =()=>{
  let res = axios.get("http://localhost:4000/api/v1/notes", headerConfig)
  return res;
}

export let updateNoteData = (noteDetailsdata,noteId)=>{
  let res = axios.put(`http://localhost:4000/api/v1/notes/${noteId}`,noteDetailsdata, headerConfig)
  return res;
}


