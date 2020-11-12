import { createElement, Component } from 'rax';

import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './index.css';
import { withRouter } from 'rax-app';

@withRouter
export default class Navigator extends Component {
  backHome = () => {
    this.props.history.goBack();
  };

  render() {
    const { title, desc, history } = this.props;
    return (
      <View style={styles.view}>
        <View style={styles.backBox}>
          <Image
            mode="aspectFill"
            source={{
              uri:
                'https://img.alicdn.com/tfs/TB1RRzFeKL2gK0jSZFmXXc7iXXa-200-200.png',
            }}
            style={styles.backImg}
            onClick={this.backHome}
          />
        </View>
        <View style={styles.headerBox}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}