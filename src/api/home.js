import fetch from './fetch'
export default class home extends fetch {

  static footTitle(data){
    const url = '/v2/movie/in_theaters'
    return fetch.get(url,data)
  }

}
