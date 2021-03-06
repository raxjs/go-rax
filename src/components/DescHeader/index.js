import { createElement } from 'rax';

import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Navigate from 'universal-navigate';
import styles from './index.css';

function isHideHome() {
  return location.href.indexOf('hide_home') > -1;
}

function backHome() {
  Navigate.pop();
}

export default function DescHeader({ title }) {
  const hideHome = isHideHome();
  return (
    <View style={styles.app}>
      <View style={styles.backBox}>
        {!hideHome && (
          <Image
            source={{
              uri:
                'https://gw.alicdn.com/tfs/TB1YvaXdQL0gK0jSZFxXXXWHVXa-200-200.png',
            }}
            style={styles.back}
            onClick={backHome}
          />
        )}
      </View>
      <View style={styles.headerBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
