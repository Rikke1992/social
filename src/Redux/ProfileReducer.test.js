import React from "react";
let state = {
  isFetching: true,
  status: "_",
};

/* it("new post should be added", () => {
  let action = PutStatus("12");

  let newState = ProfileReducer(state, action);
  expect(newState.status.length).toBe(2);
}); */
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ChengeStatus":
      {
        let newState = { ...state };
        newState.status = action.status;
        return newState;
      }
      break;
    case "GetStatus":
      {
        let newState = { ...state };
        newState.status = action.status;

        console.log("action>>>>>" + action.status);
        return newState;
      }
      break;
    case "SetProfile":
      {
        let newState = { ...state };
        newState.user = action.profile;

        return newState;
      }
      break;

    case "toogleFetching":
      {
        let newState = { ...state };
        newState.isFetching = action.itemFetching;
        return newState;
      }

      break;

    default: {
      return state;
    }
  }
};
export const ChengeStatus = (status) => {
  return { type: "ChengeStatus", status };
};
it("ChengeStatus", () => {
  let action = ChengeStatus("OPA");
  let newState = ProfileReducer(state, action);
  expect(newState.status).toBe("ssss");
});
