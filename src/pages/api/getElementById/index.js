import { createElement } from 'rax';
import getElementById from 'rax-get-element-by-id';

import View from 'rax-view';
import Text from 'rax-text';
import Input from 'rax-textinput';
import styles from './index.css';
import commonStyles from '../../assets/css/common.css';

import DescHeader from '../../components/DescHeader';

export default function App() {
  function focus() {
    getElementById('input').focus();
  }
  return (
    <View style={commonStyles.app}>
      <DescHeader title={'getElementById'} desc={'获取匹配特定 ID 的元素'} />

      <View style={commonStyles.section}>
        <Text style={commonStyles.sectionTitle}>getElementById</Text>

        <View style={commonStyles.sectionDemo}>
          <Input
            id="input"
            style={styles.defaultInput}
            placeholder={'Let me focus.'}
          />
          <View style={commonStyles.sectionItem}>
            <View style={commonStyles.sectionBtn} onClick={focus}>
              <Text style={commonStyles.sectionBtnDesc}>input focus</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
