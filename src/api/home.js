import fetch from './fetch'
export default class home extends fetch {

  static footTitle(data){
    const url = '/custom/footTitle.do'
    return fetch.get(url,data)
  }
  
}