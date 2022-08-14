import { atom } from "recoil";
export const loggedinState = atom({
  key: "loggedinState",
  default: false,
});
export const datastate = atom({
  key: "datastate",
  default: {},
});
