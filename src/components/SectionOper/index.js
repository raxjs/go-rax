import { createElement, useEffect } from 'rax';
import View from 'rax-view';
import SectionOperText from '../SectionOperText';
import './index.css';

export default function SectionOper({ style, children, onClick, text, ...props }) {

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '30rpx'
      }}
      onClick={onClick}
    ><SectionOperText>{children}</SectionOperText>
    </View>
  );
}
