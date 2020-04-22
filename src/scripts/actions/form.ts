import ActionTypes from '../constants';

import FormApi from '../api/form';

export const saveFromData = data => ({
  type: ActionTypes.SAVE_FORM_DATA,
  data
});

export const receiveFormData = data => ({
  type: ActionTypes.RECEIVE_FORM_DATA,
  data
});

/**
 * 获取form 数据
 * @param id
 */
export const getFormData = (id: number) => async dispatch => {
  const result: any = await FormApi.getFormData(id);
  dispatch(receiveFormData(result.re));
};
