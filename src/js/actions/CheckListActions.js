import keyMirror from 'key-mirror';
import { CheckListItem } from '../constants/ListItemImmutables';

const ActionTypes = keyMirror({
  ADD_ITEM: null,
});

const CheckListActions = {
  ActionTypes,
  addItem(item: CheckListItem) {
    return { type: ActionTypes.ADD_ITEM, payload: item };
  },
  removeItem(item: CheckListItem) {},
  checkItem(item: CheckListItem) {},
};

export { CheckListActions, ActionTypes };
