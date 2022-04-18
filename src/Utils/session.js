import { getLocal, removeLocal } from "./storage";


export function isLogin() {
  return !!getLocal("susa_admin");
}

export function isExpires(){
  const limit = new Date(Date.now())
  const {expires} = getLocal("susa_admin");
  console.log('now',limit)
  console.log('expires',expires)
  if( limit > new Date(expires) ){
    console.log('entraa')
    return true
  }else{
    return false
  }
}