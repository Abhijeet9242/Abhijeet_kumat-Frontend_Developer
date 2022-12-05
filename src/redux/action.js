import axios from "axios";
import { GET_CAPSULE, GET_SELECTED_CAPSULE } from "./actionTypes";

export const fetchCapsule = (type, status, launch) => (dispatch) => {
  let link = `https://api.spacexdata.com/v3/capsules?limit=7`;

  if (type === "" && status === "" && launch === "") {
    axios.get(link).then((res) => {
      dispatch(getCapsules(res.data));
    });
  }

  if (type !== "") {
    axios.get(link).then((res) => {
      let data = res.data.filter((prod) => {
        return prod.type === type;
      });

      dispatch(getCapsules(data));
    });
  }

  if (status !== "") {
    axios
      .get(`https://api.spacexdata.com/v3/capsules/${status}`)
      .then((res) => {
        dispatch(getCapsules(res.data));
      });
  }

  if (launch !== "") {
    axios.get(link).then((res) => {
      let data = res.data.filter((prod) => {
        return prod.original_launch === launch;
      });

      dispatch(getCapsules(data));
    });
  }
};

const getCapsules = (payload) => {
  return {
    type: GET_CAPSULE,
    payload: payload,
  };
};

export const getSelectedCapsule = (payload) => {
  return {
    type: GET_SELECTED_CAPSULE,
    payload: payload,
  };
};
