import ActionTypes from '../constants';

const initialState = {
  panes: [],
  activeKey: '0'
};

const home = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TAB_PAGE: {
      const newPanes = state.panes.find(item => item.key === action.page.key)
        ? [...state.panes]
        : [...state.panes, action.page];
      return { ...state, panes: newPanes, activeKey: action.page.key };
    }

    case ActionTypes.REMOVE_TAB_PAGE: {
      let activeKey = state.activeKey;
      let lastIndexNum = 0;
      state.panes.forEach((pane: any, i) => {
        if (pane.key === action.key) {
          lastIndexNum = i - 1;

          return true;
        }
      });
      lastIndexNum = lastIndexNum < 0 ? 0 : lastIndexNum;
      const panes: any = state.panes.filter(
        (item: any) => item.key !== action.key
      );
      if (lastIndexNum >= 0 && activeKey === action.key) {
        activeKey = panes[lastIndexNum] ? panes[lastIndexNum].key : 0;
      }
      return {
        ...state,
        panes,
        activeKey: panes[lastIndexNum] ? panes[lastIndexNum].key : 0
      };
    }

    case ActionTypes.CHANGE_CURRENT_TAB_PAGE:
      return { ...state, activeKey: action.key };
    case ActionTypes.REMOVE_ALL_TAB_PAGE:
      return { ...state, panes: [], activeKey: 0 };

    default:
      return state;
  }
};
export default home;
