import { createElement, useState, useEffect } from 'rax';

import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import ScrollView from 'rax-scrollview';
import MenuList from './components/MenuList';
import { isWeex } from 'universal-env';

import { basicComponentList } from '../../config/component';
import { APIList } from '../../config/api';
import { COMPONENT } from '../../constants';

import styles from './index.css';

export default function App({ isCN, activeTab, history }) {
  const logoSource = {
    uri: 'https://gw.alicdn.com/tfs/TB11oXVXRGE3KVjSZFhXXckaFXa-149-148.png',
  };
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(activeTab === COMPONENT ? basicComponentList : APIList);
  }, [activeTab]);

  return (
    <View style={styles.app}>
      <View style={styles.banner}>
        <Image source={logoSource} style={styles.logo} />
        <Text style={styles.title}>Go Rax</Text>
      </View>
      <ScrollView>
        <View style={styles.listWrap}>
          {list.map(listItem => {
            const iconSource = {
              uri: listItem.icon,
            };
            return (
              <View style={styles.listGroup} key={listItem.icon}>
                <View style={styles.listGroupItem}>
                  <Image
                    source={iconSource}
                    style={{
                      height: '30rpx',
                      width: '30rpx',
                    }}
                  />
                  <Text style={styles.listGroupTitle}>
                    {isCN ? listItem.type : listItem.typeEn}
                  </Text>
                </View>
                <View style={styles.listGroupBody}>
                  <MenuList
                    key="menulist"
                    list={listItem.list}
                    isCN={isCN}
                    history={history}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <slot x-if={isWeex} name="body" />
    </View>
  );
}
