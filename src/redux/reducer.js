import { GET_CAPSULE, GET_SELECTED_CAPSULE } from "./actionTypes";

const capsuleState = [];
export const capsuleReducer = (state = capsuleState, action) => {
  switch (action.type) {
    case GET_CAPSULE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const selectedCapsule = {};

export const selectedCapsuleReducer = (state = selectedCapsule, action) => {
  switch (action.type) {
    case GET_SELECTED_CAPSULE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
