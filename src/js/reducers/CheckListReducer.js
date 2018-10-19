import { CheckListItem, CheckList } from '../constants';
import { ActionTypes } from '../actions/CheckListActions';

const initialState = new CheckList({ name: 'Item list' });

const CheckListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      const newList = state
        .getIn(['collection'])
        .push(new CheckListItem({ name: action.payload }));
      return state.setIn(['collection'], newList);
    default:
      return state;
  }
};

export default CheckListReducer;
