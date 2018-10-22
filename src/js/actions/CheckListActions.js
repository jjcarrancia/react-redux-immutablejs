import keyMirror from 'key-mirror';
import { CheckListItem } from '../constants/ListItemImmutables';

const ActionTypes = keyMirror({
  ADD_ITEM: null,
  REMOVE_ITEM: null,
  TOGGLE_ITEM: null,
});

const CheckListActions = {
  ActionTypes,
  addItem(item: CheckListItem) {
    return { type: ActionTypes.ADD_ITEM, payload: item };
  },
  removeItem(index: number) {
    return { type: ActionTypes.REMOVE_ITEM, payload: index };
  },
  toggleItem(index: number) {
    return { type: ActionTypes.TOGGLE_ITEM, payload: index };
  },
};

export { CheckListActions, ActionTypes };
