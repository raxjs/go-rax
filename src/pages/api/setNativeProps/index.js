import { createElement, useRef } from 'rax';
import setNativeProps from 'rax-set-native-props';

import View from 'rax-view';
import Text from 'rax-text';
import commonStyles from '../../assets/css/common.css';

import DescHeader from '../../components/DescHeader';

export default function SetNativePropsDemo() {
  const textRef = useRef(null);

  function updateStyle() {
    setNativeProps(textRef.current, {
      style: {
        color: '#dddddd',
      },
    });
  }
  return (
    <View style={commonStyles.app}>
      <DescHeader title={'setNativeProps'} desc={'修改原生组件的属性'} />

      <View style={commonStyles.section}>
        <Text ref={textRef} style={commonStyles.sectionTitle}>
          setNativeProps
        </Text>

        <View style={commonStyles.sectionDemo}>
          <View style={commonStyles.sectionItem}>
            <View style={commonStyles.sectionBtn} onClick={updateStyle}>
              <Text style={commonStyles.sectionBtnDesc}>修改文字样式</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
