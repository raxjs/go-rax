import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from '../index.css';

import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import { WEB, WEEX, ALI_MINI_APP, WECHAT } from '../../../config/platform';

export default function({ list, isCN, history}) {
  const arrowsSource = {
    uri:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR0IArs4c6QAAAdxJREFUOBGlVT1Lw1AUbSSBdMnQf9ChU6GFtr9AEMFBiouDuOikoGixiGgRSi2i1KJTR0fHbuLi5mRbcO7QnyAIQjCSek7ghtc0DQm+5d537z0n97yvpFIYg8GgMxqNavSTjqXhcNgCqOa6bgf+eWICABwBTafTFkiuZB7HaiyChAZMUwCapnXL5XIsSR4BgWyfHQgJbA8k+yCbKrE51ydgBp2cwbSlCuDHUqm0C+tKLGhnCJjEbpxiQa+lEOAnkGzD/kpMtXMETEJOHXJulMJ+Op3ezOfzP0rMc5eCAc6h/RamruSqtm33J5OJqcQ8N7QDKeLh4vmQOWS86rq+XiwWvyUW2oEkof0OoGOZQ9ay4zgv4/HYklhkB1KE3TmEfy9zkL4bhrFaKBQ+YxEQCDkHkPOgkHyAaCVSghRH2VgdREnQo9iZw5k4wuJ1lbo3y7LWcrncF2OREriNKpjbyMUTMAkWSkDbJ8jzQHkD4OdMJrORzWZtidGGdsCjjJwPht83TbMaBJNgroOkl2mmA17nwE3kdd5C+6E3kR34BHxQMPffAvg9gHcAXvgW+AT4cgOr7b9GAHUrlcoebORr5BHgy5dwmpxwANSO+x6ynhIMOhwAXwCc+Gn/14/lDyH1t+arhvp8AAAAAElFTkSuQmCC',
  };
  function navigateTo(path) {
    history.push('/' + path);
  }

  function showItem(item) {
    const { supported } = item;
    if (supported) {
      if(isWeb) {
        return supported.includes(WEB);
      }
      if(isWeex) {
        return supported.includes(WEEX);
      }
      if(isMiniApp) {
        return supported.includes(ALI_MINI_APP);
      }
      if (isWeChatMiniprogram) {
        return supported.includes(WECHAT);
      }
      return false;
    }
    return true;
  }
  return (
    list.map(item => {
      const show = showItem(item);
      return <View
        key={item.path}
        style={styles.itemBox}
        x-if={show}
        onClick={() => navigateTo(item.path)}
      >
        <View style={styles.listItemContent}>
          <Text style={styles.listItemName}>
            {isCN ? item.name : item.nameEn}
          </Text>
          {isCN ? <Text style={styles.listItemBrief}>{item.nameEn}</Text> : null}
        </View>
        <Image
          source={arrowsSource}
          style={{
            height: '30rpx',
            width: '14rpx',
          }}
        />
      </View>
    })
  );
}
