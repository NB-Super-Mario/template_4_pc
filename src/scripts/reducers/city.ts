import ActionTypes from '../constants';

const initialState = {
  cityList: []
};

const city = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_CITY_LIST:
      return {
        ...state,
        cityList: [...action.list]
      };
    default:
      return state;
  }
};
export default city;
