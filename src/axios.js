import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-backend-95a3e.cloudfunctions.net/api",
});

export default instance;
