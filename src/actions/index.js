import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post" ;

const URL = "/api/post";

export function fetchPosts() {
  const request = axios.get(URL);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(URL, values).then(() => {
    callback();
  }).catch((err) => {
    console.error(err);
  });

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${URL}/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${URL}/${id}`).then(() => {
    callback();
  }).catch((err) => {
    console.error(err);
  })
  return {
    type: DELETE_POST,
    payload: id
  }
}
