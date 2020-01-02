import { createElement, Component, render } from 'rax';

import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Navigate from 'universal-navigate';
import WindVane from '@ali/universal-windvane';
import { isWeb, isWeex } from 'universal-env';
import styles from './index.css';

function setTitle(options) {
  if (isWeex) {
    const navigationBar = require('@weex-module/navigationBar');
    var options = {
      animated: true,
    };
    var options = {
      title: 'My Page',
      subtitle: 'My Page Subtitle',
    };
    function successCallback () {};
    function failureCallback (errorInfo) {
      alert('result: ' + errorInfo.result + ', message: ' + errorInfo.message);
    };
    navigationBar.setTitle(options, successCallback, failureCallback);
  }
}

function isHideHome() {
  return location.href.indexOf('hide_home') > -1;
}

function backHome() {
  Navigate.pop();
}

export default function App({title, desc}) {

  const hideHome = isHideHome();
  return <View style={styles.app}>
    <View style={styles.backBox}>
    {!hideHome && <Image
      source={{
        uri: 'https://gw.alicdn.com/tfs/TB1YvaXdQL0gK0jSZFxXXXWHVXa-200-200.png'
      }}
      style={styles.back}
      onClick={backHome}
    />}
    </View>
    <View style={styles.headerBox}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
}
