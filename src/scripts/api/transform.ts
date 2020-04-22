const mockMap = {
  '/portal/employee/info.do_': `/static-mock/employee_info.json`,
  '/resource/web/cms/getCategoryTree': `/static/static-mock/new_menu.json`,
  '/resource/web/cms/queryNews': `/static/static-mock/new_list.json`,
  '/index/arrangement/getTaskListByEmployeeNo.do_':
    '/static-mock/task_list.json',
  'portal/toDo/count.do_': '/static-mock/to_do_count.json',
};

export const transformUrl = (api: string) => {
  return !NEED_MOCK ? api : mockMap[api];
};
