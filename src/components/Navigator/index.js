import { createElement } from 'rax';

import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Navigate from 'universal-navigate';
import styles from './index.css';

function backHome() {
  Navigate.go({
    step: -1,
  });
}

export default function App({ title, desc }) {
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
          onClick={backHome}
        />
      </View>
      <View style={styles.headerBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
