import ActionTypes from '../constants';

import FooApi from '@api/foo';

export const receiveFoo = foo => ({
  type: ActionTypes.RECEIVE_FOO,
  foo
});
export const fetchFoo = () => async dispatch => {
  const result = await FooApi.getFoo();
  dispatch(receiveFoo(result.data));
};
