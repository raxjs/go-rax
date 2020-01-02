import { createElement } from 'rax';
import View from 'rax-view';
import SectionOperText from '../SectionOperText';
import './index.css';

export default function SectionOper({ children, onClick }) {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '30rpx',
      }}
      onClick={onClick}
    >
      <SectionOperText>{children}</SectionOperText>
    </View>
  );
}
