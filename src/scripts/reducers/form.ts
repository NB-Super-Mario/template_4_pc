import ActionTypes from '../constants';

const initialState = {
  data: {}
};

const form = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_FORM_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
export default form;
