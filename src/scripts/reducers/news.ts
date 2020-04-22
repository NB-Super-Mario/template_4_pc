const initialState = {
  categoryId: [],
  pageNo: 1,
};

const news = (state = initialState, action: any) => {
  switch (action.type) {
    case 'pageNoAdd':
      return { ...state, pageNo: state.pageNo + 1 };
  }
};
