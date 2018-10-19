import React from 'react';
import { Card, List } from 'semantic-ui-react';
import { CheckListItem, CheckList } from '../js/constants';

interface Props {
  itemList: CheckList;
  handleRemove: () => any;
  handleCheckItem: () => any;
}

const ItemList = (props: Props) => {
  const { itemList } = props;

  return itemList.get('collection').isEmpty() ? null : (
    <Card.Content>
      <List>
        {itemList.get('collection').map((item, idx) => {
          return <List.Item key={idx}>{item.get('name')}</List.Item>;
        })}
      </List>
    </Card.Content>
  );
};

export default ItemList;
