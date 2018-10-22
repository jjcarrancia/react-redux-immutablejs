import React from 'react';
import { connect } from 'react-redux';
import { CheckListItem, CheckList } from '../js/constants';
import { Container, Card, Input, Button } from 'semantic-ui-react';
import { CheckListActions } from '../js/actions';
import ItemList from '../components/ItemList.react';
const { addItem, removeItem, toggleItem } = CheckListActions;

interface StateProps {
  itemList: CheckList;
}

interface DispatchProps {
  addItem: (item: CheckListItem) => any;
  removeItem: (index: number) => any;
  toggleItem: (index: number) => any;
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
  removeItem,
  toggleItem,
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
    const { itemList, removeItem, toggleItem } = this.props;
    const { inputValue } = this.state;
    return (
      <Container>
        <Card centered>
          <Card.Header textAlign="center">{itemList.get('name')}</Card.Header>
          <ItemList
            itemList={itemList}
            handleRemove={removeItem}
            handleToggleItem={toggleItem}
          />
          <Card.Content extra>
            <Input
              placeholder="Type here..."
              onChange={(event, value) => this.handleChange(event, value)}
              value={inputValue}
            />
            <Button onClick={() => this.handleSubmit()}>Add item</Button>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
