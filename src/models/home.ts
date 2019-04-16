import modelExtend from 'dva-model-extend'
import {model} from '../utils/model'
// import Action from '../utils/action'
import Home from '../api/home'

export default modelExtend(model, {
  namespace: 'home',
  state: {
    homeList: ['哇哈哈'],
  },
  effects: {
    * fetch({payload, callback}, {call, put}) {
      try {
        const res = yield call(Home.footTitle, payload);
        yield put({
          type: 'saveHome',
          payload: res
        });
        if (callback) callback()
      } catch (e) {
        console.log('请求异常')
      }
    }
  },
  reducers: {
    saveHome(state, action) {
      return {
        ...state,
        homeList: action.payload,
      };
    }
  },
})
