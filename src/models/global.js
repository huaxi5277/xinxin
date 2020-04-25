
export default {

  namespace: 'global',

  state: {
    userInfo : {
      email : null,
      password : null
    }
  },

  subscriptions: {},

  effects: {
    *setUserInfo({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' ,payload });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
