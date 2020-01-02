import { createElement, useState } from 'rax';
import View from 'rax-view';
import SectionTitle from '../SectionTitle';

export default function Section({ children, title }) {
  const [titleBoxStyle, setTitleBoxStyle] = useState({
    backgroundColor: '#ffffff',
    fontSize: '32rpx',
    position: 'relative',
    borderBottom: '2rpx solid #dddddd',
  });
  return (
    <View
      style={titleBoxStyle}
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </View>
  );
}
