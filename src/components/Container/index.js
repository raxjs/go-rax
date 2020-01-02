import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import styles from './index.css';
import { isMiniApp, isWeChatMiniProgram } from 'universal-env';

import Navigator from '../Navigator';

export default function App({ children, title, moduleTitle, desc }) {
  if (isMiniApp) {
    my.setNavigationBar({
      title: moduleTitle
    });
  }
  if (isWeChatMiniProgram) {
    wx.setNavigationBarTitle({
      title: moduleTitle
    });
  }
  return (
    <View style={styles.app}>
      {isMiniApp || isWeChatMiniProgram ? null : <Navigator title={title} />}
      <ScrollView>
        <View style={styles.descBox}>
          <Text style={styles.moduleTitle}>{moduleTitle}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {children}
      </ScrollView>
    </View>
  );
}
