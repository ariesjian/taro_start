import modelExtend from 'dva-model-extend'
import { model } from '../utils/model'
import Action from '../utils/action'
import { setCacheData, getGlobalData } from '../utils'
import Home from '../api/home'

export default modelExtend(model,  {
  namespace: 'main',
  state: {
    test:1
  },
  reducers: {
    getShuffleList(state){

    }
  },
  effects: {
    *footMatchEventlist({ payload }, { select, call, put }) {
      try{
        console.log(123123)
        const res = yield call(Home.footMatchEventlist)
        yield put(Action('updateState', { test: 2 }))
      }catch(e){
        console.log(e)
      }
    }
  }
})
