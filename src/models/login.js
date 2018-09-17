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
        console.log("jinlaile ")
        yield put(routerRedux.push('/'));
      },
    },
  
    // reducers: {
    //   save(state, action) {
    //     return { ...state, ...action.payload };
    //   },
    // },
  
  };
  