import { CheckListItem, CheckList } from '../constants';
import { ActionTypes } from '../actions/CheckListActions';

const initialState = new CheckList({ name: 'Item list' });

const CheckListReducer = (state = initialState, action) => {
  let newList;
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      newList = state.collection.push(
        new CheckListItem({ name: action.payload }),
      );
      return state.setIn(['collection'], newList);
    case ActionTypes.REMOVE_ITEM:
      newList = state.collection.removeIn([action.payload]);
      return state.setIn(['collection'], newList);
    case ActionTypes.TOGGLE_ITEM:
      newList = state.collection.update(
        action.payload,
        val => new CheckListItem({ name: val.name, checked: !val.checked }),
      );
      return state.setIn(['collection'], newList);
    default:
      return state;
  }
};

export default CheckListReducer;
