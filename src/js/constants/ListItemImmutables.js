import { Record, List } from 'immutable';

const CheckListItem = Record(
  ({
    name: '',
    checked: false,
  }: {
    name: string,
    checked: boolean,
  }),
);

const CheckList = Record(
  ({
    name: '',
    creationDate: new Date(),
    collection: List([]),
  }: {
    name: string,
    creationDate: Date,
    collection: List<CheckListItem>,
  }),
);

export { CheckListItem, CheckList };
