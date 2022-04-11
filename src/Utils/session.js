import { getLocal } from "./storage";

export function isLogin() {
  return !!getLocal("susa_admin");
}
