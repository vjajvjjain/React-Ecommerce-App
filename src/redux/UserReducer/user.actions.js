import { ACTIONS_NAME } from "./user.files";
export const userAction = (user) => ({
  type: ACTIONS_NAME.SET_CURRENT_USER,
  payload: user,
});
