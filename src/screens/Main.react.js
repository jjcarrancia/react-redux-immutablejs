import React from 'react';
import { connect } from 'react-redux';
import { CheckListItem, CheckList } from '../js/constants';
import { Card, Input, List, Button } from 'semantic-ui-react';
import { CheckListActions } from '../js/actions';

const { addItem } = CheckListActions;

interface StateProps {
  itemList: CheckList;
}

interface DispatchProps {
  addItem: (item: CheckListItem) => any;
}

interface Props extends StateProps, DispatchProps {}

interface State {
  inputValue: string;
}

const mapStateToProps = state => {
  return { itemList: state.CheckListReducer };
};

const mapDispatchToProps = {
  addItem,
};

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange(event: any, input: Object) {
    this.setState({ inputValue: input.value });
  }

  handleSubmit() {
    const { addItem } = this.props;
    const { inputValue } = this.state;
    addItem(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { itemList } = this.props;
    const { inputValue } = this.state;
    return (
      <Card>
        <Card.Header textAlign="center">{itemList.get('name')}</Card.Header>
        {itemList.get('collection').isEmpty() ? null : (
          <Card.Content>
            <List>
              {itemList.get('collection').map((item, idx) => {
                return <List.Item key={idx}>{item.get('name')}</List.Item>;
              })}
            </List>
          </Card.Content>
        )}
        <Card.Content extra>
          <Input
            placeholder="Type here..."
            onChange={(event, value) => this.handleChange(event, value)}
            value={inputValue}
          />
          <Button onClick={() => this.handleSubmit()}>Add item</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
