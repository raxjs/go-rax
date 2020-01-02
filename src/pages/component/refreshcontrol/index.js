import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import commonStyles from '../../assets/css/common.css';
import styles from './index.css';
import RecyclerView from 'rax-recyclerview';
import RefreshControl from 'rax-refreshcontrol';

import Container from '../../../components/Container';

let arrayFrom = function(arrayLike /*, mapFn, thisArg */) {
  if (arrayLike == null) {
    throw new TypeError('Object is null or undefined');
  }

  // Optional args.
  var mapFn = arguments[1];
  var thisArg = arguments[2];

  var C = this;
  var items = Object(arrayLike);
  var symbolIterator =
    typeof Symbol === 'function' ? Symbol.iterator : '@@iterator';
  var mapping = typeof mapFn === 'function';
  var usingIterator = typeof items[symbolIterator] === 'function';
  var key = 0;
  var ret;
  var value;

  if (usingIterator) {
    ret = typeof C === 'function' ? new C() : [];
    var it = items[symbolIterator]();
    var next;

    while (!(next = it.next()).done) {
      value = next.value;

      if (mapping) {
        value = mapFn.call(thisArg, value, key);
      }

      ret[key] = value;
      key += 1;
    }

    ret.length = key;
    return ret;
  }

  var len = items.length;
  if (isNaN(len) || len < 0) {
    len = 0;
  }

  ret = typeof C === 'function' ? new C(len) : new Array(len);

  while (key < len) {
    value = items[key];

    if (mapping) {
      value = mapFn.call(thisArg, value, key);
    }

    ret[key] = value;

    key += 1;
  }

  ret.length = key;
  return ret;
};

class Row extends Component {
  handleClick = e => {
    this.props.onClick(this.props.data);
  };

  render() {
    return (
      <View onPress={this.handleClick}>
        <View style={styles.row}>
          <Text style={styles.text}>
            {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
          </Text>
        </View>
      </View>
    );
  }
}

export default class RefreshControlDemo extends Component {
  state = {
    isRefreshing: false,
    loaded: 0,
    refreshText: '↓ Pull To Refresh',
    rowData: arrayFrom(new Array(20)).map((val, i) => ({
      text: 'Initial row ' + i,
      clicks: 0,
    })),
  };

  handleClick = row => {
    row.clicks++;
    this.setState({
      rowData: this.state.rowData,
    });
  };

  handleRefresh = e => {
    this.setState({
      isRefreshing: true,
      refreshText: 'Refreshing',
    });
    setTimeout(() => {
      // prepend 10 items
      const rowData = arrayFrom(new Array(10))
        .map((val, i) => ({
          text: 'Loaded row ' + (+this.state.loaded + i),
          clicks: 0,
        }))
        .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
        refreshText: '↓ Pull To Refresh',
      });
    }, 1000);
  };

  render() {
    const rows = this.state.rowData.map((row, ii) => {
      return (
        <RecyclerView.Cell>
          <Row key={ii} data={row} onClick={this.handleClick} />
        </RecyclerView.Cell>
      );
    });
    return (
      <Container
        title={'Functional Components/RefreshControl'}
        moduleTitle={'RefreshControl'}
        desc={'Drop-down refresh for scrolling containers.'}
      >
        <View style={commonStyles.section}>
          <View style={styles.container}>
            <RecyclerView refreshControl={null}>
              <RefreshControl
                style={styles.refreshView}
                refreshing={this.state.isRefreshing}
                onRefresh={this.handleRefresh}
              >
                <Text>{this.state.refreshText}</Text>
              </RefreshControl>
              {rows}
            </RecyclerView>
          </View>
        </View>
      </Container>
    );
  }
}
