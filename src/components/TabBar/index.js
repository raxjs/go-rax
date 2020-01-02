import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import styles from './index.css';
import { isWeb } from 'universal-env';
import { COMPONENT, API } from '../../constants';

function assignStyles(...styleArr) {
  return Object.assign({}, ...styleArr);
}

export default function TabBar({ isCN, activeTab: initial }) {
  const [activeTab, setActiveTab] = useState(initial);
  const isAPI = activeTab === API;
  const isComponent = activeTab === COMPONENT;

  const componentSource = {
    uri: 'https://img.alicdn.com/tfs/TB1q4nTeHj1gK0jSZFOXXc7GpXa-200-200.png',
  };
  const componentActiveSource = {
    uri: 'https://img.alicdn.com/tfs/TB1RBzOeRv0gK0jSZKbXXbK2FXa-200-200.png',
  };
  const apiSource = {
    uri: 'https://gw.alicdn.com/tfs/TB1IVxzcuP2gK0jSZFoXXauIVXa-200-200.png',
  };
  const apiActiveSource = {
    uri: 'https://img.alicdn.com/tfs/TB1g70heebviK0jSZFNXXaApXXa-200-200.png',
  };

  return (
    <View style={styles.navbar}>
      <View
        style={styles.navbarItem}
        onClick={setActiveTab.bind(null, COMPONENT)}
      >
        {isComponent ? (
          <Image source={componentActiveSource} style={styles.navbarItemIcon} />
        ) : (
          <Image source={componentSource} style={styles.navbarItemIcon} />
        )}
        <Text
          style={
            isComponent
              ? assignStyles(
                  styles.navbarItemBase,
                  styles.navbarItemActive,
                  isWeb ? styles.navbarItemInWeb : {},
                )
              : assignStyles(
                  styles.navbarItemBase,
                  styles.navbarItemBlur,
                  isWeb ? styles.navbarItemInWeb : {},
                )
          }
        >
          {isCN ? '组件' : 'Component'}
        </Text>
      </View>
      <View style={styles.navbarItem} onClick={setActiveTab.bind(this, API)}>
        {isAPI ? (
          <Image source={apiActiveSource} style={styles.navbarItemIcon} />
        ) : (
          <Image source={apiSource} style={styles.navbarItemIcon} />
        )}
        <Text
          style={
            isAPI
              ? assignStyles(
                  styles.navbarItemBase,
                  styles.navbarItemActive,
                  isWeb ? styles.navbarItemInWeb : {},
                )
              : assignStyles(
                  styles.navbarItemBase,
                  styles.navbarItemBlur,
                  isWeb ? styles.navbarItemInWeb : {},
                )
          }
        >
          API
        </Text>
      </View>
    </View>
  );
}
