import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";


function makeObj(arr) {
  return arr.reduce((accum, val) => {
   accum[val._id] = val;
   return accum
  }, {});
}

function omit(obj, keys) {
  for(let i in obj) {
    if(i === keys) {
      delete obj[i];
    }
  }
 return obj;
}

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      return omit(state, action.payload);
    case FETCH_POST:
    //...state  take all of the exisiting posts we have out of our state object and put them into our new state object we return
      // const post = action.payload.data;
      // const newState =  { ...state};
      // newState[post.id] = post;
      // return newState;
      //key interpolation.  **KEY** [action.payload.data._id] : **VALUE** action.payload.data
      return {...state, [action.payload.data._id]: action.payload.data};
    case FETCH_POSTS:
      return makeObj(action.payload.data);
    default:
      return state;
  }
}
