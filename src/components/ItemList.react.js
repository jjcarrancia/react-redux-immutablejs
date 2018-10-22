import React from 'react';
import { Card, List, Checkbox, Grid, Icon } from 'semantic-ui-react';
import { CheckListItem, CheckList } from '../js/constants';

interface Props {
  itemList: CheckList;
  handleRemove: (index: number) => any;
  handleToggleItem: (index: number) => any;
}

const ItemList = (props: Props) => {
  const { itemList, handleRemove, handleToggleItem } = props;

  return itemList.get('collection').isEmpty() ? null : (
    <Card.Content>
      <List>
        <Grid>
          {itemList.get('collection').map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <Grid.Column width={12}>
                  <Checkbox
                    as={List.Item}
                    label={item.get('name')}
                    onChange={() => handleToggleItem(idx)}
                    checked={item.get('checked')}
                  />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Icon
                    name="close"
                    size="large"
                    onClick={() => handleRemove(idx)}
                  />
                </Grid.Column>
              </React.Fragment>
            );
          })}
        </Grid>
      </List>
    </Card.Content>
  );
};

export default ItemList;
