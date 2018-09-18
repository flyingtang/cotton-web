import * as services from  "../services/login"
import { routerRedux } from 'dva/router';

export default {

    namespace: 'login',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *redirect ({ payload }, { put }) {
        
        console.log("jinlaile ", payload)
        const url = payload.url
        yield put(routerRedux.push(url));
      },
    },
  
    // reducers: {
    //   save(state, action) {
    //     return { ...state, ...action.payload };
    //   },
    // },
  
  };
  